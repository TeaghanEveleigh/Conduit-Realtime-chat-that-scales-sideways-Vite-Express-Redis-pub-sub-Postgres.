
export type User = {
  id: string;
  email: string;
  username: string;
  password_hash: string;
  created_at: Date;
};


export type CreateUserInput = {
  email: string;
  username: string;
  password_hash: string;       // plain text — service layer hashes it
};

export type UpdateUserInput = Partial<CreateUserInput>;



export type PublicUser = Omit<User, 'password_hash'>;