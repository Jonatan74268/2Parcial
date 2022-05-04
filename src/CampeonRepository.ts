import fs from 'fs';
import path from 'path';
import IRepository from './IRepository';
import Campeon from './Campeon';

export default class CampeonRepository implements IRepository<Campeon> {
  private campeones: Campeon[] = [];

  private static readonly CAMPEONES_FILE_PATH = path.join(
    __dirname,
    'data/campeon.json'
  );

  public constructor() {
    this.load();
  }

  public list(): Campeon[] {
    return this.campeones;
  }

  public get(id: string): Campeon {
    return <Campeon>this.campeones.find((campeones) => campeones.id === id);
  }

  public add(entity: Campeon): Campeon {
    this.campeones.push(entity);
    this.save();
    return entity;
  }

  public update(entity: Campeon): Campeon {
    this.campeones = this.campeones.reduce(
      (accumulation: Campeon[], currentCampeon) => {
        if (currentCampeon.id === entity.id) {
          accumulation.push(entity);
        } else {
          accumulation.push(currentCampeon);
        }

        return accumulation;
      },
      []
    );

    this.save();

    return entity;
  }

  public delete(id: string): void {
    this.campeones = this.campeones.reduce(
      (accumulation: Campeon[], currentCampeon) => {
        if (currentCampeon.id !== id) {
          accumulation.push(currentCampeon);
        }

        return accumulation;
      },
      []
    );

    this.save();
  }

  private load(): void {
    const campeonJson = fs.readFileSync(CampeonRepository.CAMPEONES_FILE_PATH);
    this.campeones = <Campeon[]>JSON.parse(campeonJson.toString());
  }

  private save(): void {
    const campeonJson = JSON.stringify(this.campeones);
    fs.writeFileSync(CampeonRepository.CAMPEONES_FILE_PATH, campeonJson);
  }
}
