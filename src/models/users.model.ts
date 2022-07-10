import { Model, ModelObject, RelationMappings } from 'objection';
import { User } from '@interfaces/users.interface';
import { Roles } from './roles.model';

export class Users extends Model implements User {
  id!: number;
  username!: string;
  password!: string;

  static tableName = 'users'; // database table name
  static idColumn = 'id'; // id column name

  static relationMappings(): RelationMappings {
    return {
      role: {
        relation: Model.BelongsToOneRelation,
        modelClass: Roles,
        join: {
          from: 'users.role_id',
          to: 'roles.id',
        },
      },
    };
  }
}

export type UsersShape = ModelObject<Users>;
