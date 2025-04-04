import {
  FindManyOptions,
  ObjectLiteral,
  Repository,
  SaveOptions,
} from 'typeorm';
import {
  GetAllCriteriaType,
  GetOneCriteriaType,
  UpdateCriteriaType,
} from './types';

/**
 * An abstract class representing a repository.
 */
/* istanbul ignore next */
export abstract class AbstractRepository<E extends ObjectLiteral> {
  /**
   * Retrieves multiple entities based on the provided options.
   * @param options - The search options.
   * @returns A promise resolving to an array of entities.
   */
  abstract getAll(options?: GetAllCriteriaType<E>): Promise<E[]>;

  /**
   * Retrieves multiple entities based on the provided options.
   * @param options - The search options.
   * @returns A promise resolving to an array of entities and the total count.
   */
  abstract getAllPaginated(
    options?: FindManyOptions<E>,
  ): Promise<[E[], number]>;

  /**
   * Retrieves a single entity based on the provided options.
   * @param options - The search options.
   * @returns A promise resolving to the found entity or null if not found.
   */
  abstract getOne(options: GetOneCriteriaType<E>): Promise<E | null>;

  /**
   * Creates a new entity.
   * @param entity - The entity to create.
   * @returns A promise resolving to the insertion result.
   */
  abstract create(entity: E): Promise<E>;

  /**
   * Updates entities based on the provided criteria and partial entity.
   * @param criteria - The criteria to match entities.
   * @param partialEntity - The partial entity with updated values.
   * @returns A promise resolving to the update result.
   */
  abstract update(
    criteria: UpdateCriteriaType<E>,
    partialEntity: E,
  ): Promise<E | null>;

  /**
   * Deletes entities based on the provided criteria.
   * @param criteria - The criteria to match entities.
   * @returns A promise resolving to the deletion result.
   */
  abstract delete(criteria: UpdateCriteriaType<E>): Promise<E | null>;

  /**
   * Saves the provided entity.
   * @param entity - The entity to save.
   * @param options - The save options.
   * @returns A promise resolving to the saved entity.
   */
  abstract save(entity: E, options?: SaveOptions): Promise<E>;

  /**
   * Retrieves the repository of the entity.
   * @returns The repository of the entity.
   */
  abstract getTypeOrmRepository(): Repository<E>;
}
