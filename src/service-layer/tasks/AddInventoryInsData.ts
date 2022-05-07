import InventoryIns from '../../domain-layer/entities/InventoryIns';
import DatabaseConnection from '../../persistence-layer/DatabaseConnection';
import FindCampeonTask from './FindCampeonTask';
import IAsyncTask from './IAsyncTask';

export type AddInventoryInsData = {
  campeonId: number;
  quantity: number;
};

export default class AddInventoryIns implements IAsyncTask<InventoryIns> {
  private addInventoryInsData: AddInventoryInsData;

  public constructor(addInventoryInsData: AddInventoryInsData) {
    this.addInventoryInsData = addInventoryInsData;
  }

  public async execute(): Promise<InventoryIns> {
    const { campeonId, quantity } = this.addInventoryInsData;

    const findCampeonTask = new FindCampeonTask(campeonId);
    const campeon = await findCampeonTask.execute();

    const databaseConnection = await DatabaseConnection.getInstance();
    const inventoryInsRepository = databaseConnection.getRepository(InventoryIns);

    const inventoryIns = await inventoryInsRepository.save({ campeon, quantity });

    return inventoryIns;
  }
}
