import { query } from "#config/db.js";
import { getSetClauseAndValues } from "#utils/db-operations.js";
import { CreateUserInput, UpdateUserInput, User } from "./user.types.js";


export const UserModel = {
  create: (user: CreateUserInput) =>
    query<User>(
      `INSERT INTO (email , username , password_hash) 
            VALUES ($1 , $2, $3) 
            RETURNING id, email, username, created_at`,
      [user.email, user.username, user.password_hash],
    ),
  deleteById: (id: string) =>
    query<User>(
      `
        DELETE 
        FROM users
        WHERE user.id = $1`,
      [id],
    ),
  findAll: () =>
    query<User>(
      `SELECT id, email, username, created_at 
            FROM users`,
    ),

  findById: (id: string) =>
    query<User>(
      `SELECT id, email, username, created_at 
            FROM users 
            WHERE id= $1`,
      [id],
    ),

  findInRange: (limit: number, offset: number) =>
    query<User>(
      `SELECT id, email, username, created_at 
            FROM users 
            ORDER BY id LIMIT $1 OFFSET $2`,
      [limit, offset],
    ),
  updateById: (id: string, valuesToChange: UpdateUserInput) => {
    // Get list of non-undefined changes

    const result = getSetClauseAndValues(valuesToChange);
    // If there are no changes, just return the unchanged user
    if (result === null) return UserModel.findById(id);
    const { clause, values } = result;

    return query<User>(
      `UPDATE users
     SET ${clause}
     WHERE id = $1
     RETURNING id, email, username, created_at`,
      [id, ...values],
    );
  },
};
