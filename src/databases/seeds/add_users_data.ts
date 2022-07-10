import { hash } from 'bcrypt';
import { Knex } from 'knex';

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts admin seed entries
  const hashedAdminPass = await hash('password', 10);
  const adminRole = await knex('roles').where('name', 'admin').first();

  // Inserts user seed entries
  const hashedUserPass = await hash('password', 10);
  const userRole = await knex('roles').where('name', 'user').first();

  await knex('users').insert([
    { id: 1, username: 'admin', password: hashedAdminPass, role_id: adminRole.id },
    { id: 2, username: 'user', password: hashedUserPass, role_id: userRole.id },
  ]);
}
