import { Model, ModelCtor } from 'sequelize-typescript';

export default abstract class AbstractRepository<Entity extends Model> {
  protected getModel(): ModelCtor<Entity> {
    if (!this.model) throw new Error('Model not implemeted');
    return this.model;
  }

  constructor(private model: ModelCtor<Entity>) {}

  public async all(attributes?: string[]): Promise<Entity[]> {
    return this.getModel().findAll({
      attributes,
    });
  }

  public async store(data: Partial<Entity>): Promise<Entity> {
    // @todo: fix this any type
    const register = await this.getModel().create<Entity>(data as any);

    return register.toJSON();
  }
}
