import { query } from "#config/db.js";

export type CreateUserInput = Omit<User, "created_at" | "id">;
export interface UpdateUserInput {
    email?: string
    password_hash? : string 
    username? : string  
}
export interface User {
  created_at: Date;
  email: string;
  id: string;
  password_hash: string;
  username: string;
}

export const UserModel = {
  create: (user: CreateUserInput) =>
    query<User>(
      `INSERT INTO (email , username , password_hash) 
            VALUES ($1 , $2, $3) 
            RETURNING id, email, username, created_at`,
      [user.email, user.username, user.password_hash],
    ),
  deleteById : (id : string ) => 
    query<User>(`
        DELETE 
        FROM users
        WHERE user.id = $1`, 
        [id]
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
  const changes = Object.entries(valuesToChange).filter(([, value]) => value !== undefined)

  // If there are no changes, just return the unchanged user
  if (changes.length < 1) return UserModel.findById(id)

  // start at 2 because the id occupies $1
  const setClause = changes.map(([key], index) => `${key} = $${index + 2}`).join(', ')
  const values = changes.map(([, value]) => value)

  return query<User>(
    `UPDATE users
     SET ${setClause}
     WHERE id = $1
     RETURNING id, email, username, created_at`,
    [id, ...values]
  )
},
};
