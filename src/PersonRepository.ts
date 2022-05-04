import fs from 'fs';
import path from 'path';
import IRepository from './IRepository';
import Person from './Person';

export default class PersonRepository implements IRepository<Person> {
  private people: Person[] = [];

  private static readonly PEOPLE_FILE_PATH = path.join(
    __dirname,
    'data/people.json'
  );

  public constructor() {
    this.load();
  }

  public list(): Person[] {
    return this.people;
  }

  public get(id: string): Person {
    return <Person>this.people.find((person) => person.id === id);
  }

  public add(entity: Person): Person {
    this.people.push(entity);
    this.save();
    return entity;
  }

  public update(entity: Person): Person {
    this.people = this.people.reduce(
      (accumulation: Person[], currentPerson) => {
        if (currentPerson.id === entity.id) {
          accumulation.push(entity);
        } else {
          accumulation.push(currentPerson);
        }

        return accumulation;
      },
      []
    );

    this.save();

    return entity;
  }

  public delete(id: string): void {
    this.people = this.people.reduce(
      (accumulation: Person[], currentPerson) => {
        if (currentPerson.id !== id) {
          accumulation.push(currentPerson);
        }

        return accumulation;
      },
      []
    );

    this.save();
  }

  private load(): void {
    const peopleJson = fs.readFileSync(PersonRepository.PEOPLE_FILE_PATH);
    this.people = <Person[]>JSON.parse(peopleJson.toString());
  }

  private save(): void {
    const peopleJson = JSON.stringify(this.people);
    fs.writeFileSync(PersonRepository.PEOPLE_FILE_PATH, peopleJson);
  }
}
