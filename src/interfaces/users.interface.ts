import { Role } from './roles.interface';

export interface User {
  id: number;
  username: string;
  password: string;
  role_id?: number;
  role?: Role;
}
