export default interface IRepository<Model> {
  list(): Model[];

  get(id: number): Model;

  add(entity: Model): Model;

  update(entity: Model): Model;

  delete(id: number): void;
}
