import { EntitySchema } from 'typeorm';

import { BaseEntity } from '../core';

export default new EntitySchema<Whizzes.Users.User>({
  name: 'user',
  columns: {
    ...BaseEntity,
    email: {
      type: 'varchar',
      length: 100,
      nullable: false,
      unique: true,
    },
    name: {
      type: 'varchar',
      nullable: false,
      unique: true,
      length: 100,
    },
    firstName: {
      type: 'varchar',
      name: 'first_name',
      nullable: false,
      length: 100,
    },
    surname: {
      type: 'varchar',
      length: 100,
      nullable: false,
    },
    followerCount: {
      type: 'int',
      name: 'follower_count',
      default: 0,
      nullable: false,
    },
  },
  relations: {
    follows: {
      type: 'many-to-many',
      joinTable: true,
      target: 'user',
    },
    posts: {
      type: 'one-to-many',
      target: 'user',
    },
  },
});