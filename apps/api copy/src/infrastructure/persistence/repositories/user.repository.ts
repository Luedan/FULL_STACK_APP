import { HttpException, Inject, Injectable, Scope } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource, FindManyOptions, Repository, SaveOptions } from 'typeorm';
import { Request } from 'express';
import { BaseRepository } from '@app/common/database/baseRepository';
import { AbstractRepository } from '@app/common/database/abstractRepository';
import {
  GetAllCriteriaType,
  GetOneCriteriaType,
  UpdateCriteriaType,
} from '@app/common/database/types';
import { User } from '@app/domain/entities';

/**
 * A repository for the User entity.
 */
@Injectable({ scope: Scope.REQUEST })
export class UserRepository
  extends BaseRepository
  implements AbstractRepository<User>
{
  constructor(
    @InjectDataSource('main') dataSource: DataSource,
    @Inject('REQUEST') request: Request,
  ) {
    super(dataSource, request);
  }

  /**
   * Retrieves all User entities based on the provided criteria.
   *
   * @param {GetAllCriteriaType<User>} [options] - Optional criteria to filter the User entities.
   * @returns {Promise<User[]>} A promise that resolves to an array of User entities.
   * @throws {HttpException} Throws an HttpException if there is an error during the query.
   */
  async getAll(options?: GetAllCriteriaType<User>): Promise<User[]> {
    try {
      const response = await this.getRepository(User).find(options);
      return response;
    } catch (err) {
      throw new HttpException('DB Error: ' + err, 500);
    }
  }

  /**
   * Retrieves a paginated list of users along with the total count.
   *
   * @param options - Optional settings for the query, such as filters, sorting, and pagination.
   * @returns A promise that resolves to a tuple containing an array of users and the total count of users.
   * @throws HttpException - Throws an exception if there is an error during the query.
   */
  async getAllPaginated(
    options?: FindManyOptions<User>,
  ): Promise<[User[], number]> {
    try {
      const response = await this.getRepository(User).findAndCount(options);
      return response;
    } catch (err) {
      throw new HttpException('DB Error: ' + err, 500);
    }
  }

  /**
   * Retrieves a single user based on the provided criteria.
   *
   * @param {GetOneCriteriaType<User>} options - The criteria used to find the user.
   * @returns {Promise<User | null>} A promise that resolves to the user if found, or null if not found.
   * @throws {HttpException} Throws an exception if there is an error during the query.
   */
  async getOne(options: GetOneCriteriaType<User>): Promise<User | null> {
    try {
      const response = await this.getRepository(User).findOne(options);
      return response;
    } catch (err) {
      throw new HttpException('DB Error: ' + err, 500);
    }
  }

  /**
   * Creates a new user entity in the repository.
   *
   * @param {User} entity - The user entity to be created.
   * @returns {Promise<User>} A promise that resolves to the created user entity.
   * @throws {HttpException} Throws an exception if there is an error during the creation process.
   */
  create(entity: User): Promise<User> {
    try {
      const user = this.getRepository(User).create(entity);
      const response = this.getRepository(User).save(user, {
        transaction: false,
      });

      return response;
    } catch (err) {
      throw new HttpException('DB Error: ' + err, 500);
    }
  }

  /**
   * Updates a user entity based on the provided criteria and partial entity data.
   *
   * @param criteria - The criteria to find the user to be updated.
   * @param partialEntity - The partial data to update the user entity with.
   * @returns A promise that resolves to the updated user entity or null if the user is not found.
   * @throws {HttpException} If there is an error during the update process.
   */
  async update(
    criteria: UpdateCriteriaType<User>,
    partialEntity: User,
  ): Promise<User | null> {
    try {
      const user = await this.getRepository(User).findOneBy(criteria);

      if (!user) {
        return null;
      }

      const updatedUser = this.getRepository(User).merge(user, partialEntity);
      const response = await this.getRepository(User).save(updatedUser, {
        transaction: false,
      });

      return response;
    } catch (err) {
      throw new HttpException('DB Error: ' + err, 500);
    }
  }

  /**
   * Deletes a user based on the provided criteria.
   *
   * @param criteria - The criteria to find the user to be deleted.
   * @returns A promise that resolves to the deleted user or null if no user was found.
   * @throws HttpException if there is an error during the deletion process.
   */
  async delete(criteria: UpdateCriteriaType<User>): Promise<User | null> {
    try {
      const user = await this.getRepository(User).findOneBy(criteria);

      if (!user) {
        return null;
      }

      const response = await this.getRepository(User).softRemove(user, {
        transaction: false,
      });

      return response;
    } catch (err) {
      throw new HttpException('DB Error: ' + err, 500);
    }
  }

  /**
   * Saves a user entity to the database.
   *
   * @param {User} entity - The user entity to be saved.
   * @param {SaveOptions} [options] - Optional save options.
   * @returns {Promise<User>} - A promise that resolves to the saved user entity.
   * @throws {HttpException} - Throws an HTTP exception if there is an error during the save operation.
   */
  async save(entity: User, options?: SaveOptions): Promise<User> {
    try {
      const response = await this.getRepository(User).save(entity, options);

      return response;
    } catch (err) {
      throw new HttpException('DB Error: ' + err, 500);
    }
  }

  /**
   * Retrieves the TypeORM repository for the User entity.
   *
   * @returns {Repository<User>} The TypeORM repository for the User entity.
   */
  getTypeOrmRepository(): Repository<User> {
    return this.getRepository(User);
  }
}
