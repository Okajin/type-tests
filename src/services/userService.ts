import { User } from '../models/User.js';

export function getUser(): User {
  return {
    id: 1,
    name: 'Florient',
    email: 'florient@example.com',
  };
}
