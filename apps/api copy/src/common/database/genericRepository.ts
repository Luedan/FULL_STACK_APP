/* istanbul ignore file */
import { Request } from 'express';
import {
  DataSource,
  FindManyOptions,
  ObjectLiteral,
  Repository,
} from 'typeorm';
import { BaseRepository } from './baseRepository';
import { AbstractRepository } from './abstractRepository';
import {
  GetAllCriteriaType,
  GetOneCriteriaType,
  SaveOptionsType,
  UpdateCriteriaType,
} from './types';

/* istanbul ignore next */
/**
 * A generic class representing a repository.
 */
export class GenericRepository<E extends ObjectLiteral>
  extends BaseRepository
  implements AbstractRepository<E>
{
  /**
   * Constructor for the generic repository
   */
  constructor(
    private entity: new () => E,
    instance: DataSource,
    request: Request,
  ) {
    super(instance, request);
  }

  /**
   * Method to retrieve all records of an entity
   * @param options - The search options.
   * @returns A promise that resolves to an array of entities.
   */
  public async getAll(options?: GetAllCriteriaType<E>): Promise<E[]> {
    const response = await this.getRepository(this.entity).find(options);

    return response;
  }

  /**
   * Method to retrieve all records of an entity in a paginated manner
   * @param options - The search options.
   * @returns A promise that resolves to an array of entities and the total count.
   */
  public async getAllPaginated(
    options?: FindManyOptions<E>,
  ): Promise<[E[], number]> {
    const response = await this.getRepository(this.entity).findAndCount(
      options,
    );

    return response;
  }

  /**
   * Method to retrieve a record of an entity
   * @param options - The search options.
   * @returns A promise that resolves to the found entity or null if not found.
   */
  public async getOne(options: GetOneCriteriaType<E>): Promise<E | null> {
    const response = await this.getRepository(this.entity).findOne(options);

    return response;
  }

  /**
   * Method to create a record of an entity
   * @param entity - The entity to create.
   * @returns A promise that resolves to the insertion result.
   */
  public async create(entity: E): Promise<E> {
    const user = this.getRepository(this.entity).create({
      ...entity,
    });

    const response = await this.getRepository(this.entity).save(user, {
      transaction: false,
    });

    return response;
  }

  /**
   * Method to update a record of an entity
   * @param criteria - The criteria to match entities.
   * @param partialEntity - The partial entity with updated values.
   * @returns A promise that resolves to the update result.
   */
  public async update(
    criteria: UpdateCriteriaType<E>,
    partialEntity: E,
  ): Promise<E | null> {
    const user = await this.getRepository(this.entity).findOneBy(criteria);

    if (!user) {
      return null;
    }

    this.getRepository(this.entity).merge(user, partialEntity);

    const response = await this.getRepository(this.entity).save(user, {
      transaction: false,
    });

    return response;
  }

  /**
   * Method to delete a record of an entity
   * @param criteria - The criteria to match entities.
   * @returns A promise that resolves to the update result.
   */
  public async delete(criteria: UpdateCriteriaType<E>): Promise<E | null> {
    const user = await this.getRepository(this.entity).findOneBy(criteria);

    if (!user) {
      return null;
    }

    const response = await this.getRepository(this.entity).softRemove(user, {
      transaction: false,
    });

    return response;
  }

  /**
   * Method to save a record of an entity
   * @param entity - The entity to save.
   * @param options - The save options.
   * @returns A promise that resolves to the saved entity.
   */
  public async save(entity: E, options?: SaveOptionsType<E>): Promise<E> {
    const response = await this.getRepository(this.entity).save(
      entity,
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
      options,
    );

    return response;
  }

  /**
   * Method to get the repository of the entity
   * @returns The repository of the entity
   */
  public getTypeOrmRepository(): Repository<E> {
    return this.getRepository(this.entity);
  }
}
