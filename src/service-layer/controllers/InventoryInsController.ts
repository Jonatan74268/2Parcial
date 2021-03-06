import { Request, Response } from 'express';
import BaseController from './BaseController';

export default class InventoryInsController extends BaseController {
  public constructor() {
    super('/inventory-ins');
  }

  protected configureRouter(): void {
    this.router.post('/', this.addInventoryIns);
  }

  private async addInventoryIns(req: Request, res: Response): Promise<void> {}
}
