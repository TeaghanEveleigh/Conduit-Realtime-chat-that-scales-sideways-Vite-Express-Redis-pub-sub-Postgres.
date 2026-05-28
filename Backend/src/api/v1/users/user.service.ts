import { AppError } from "#api/types.js";
import { UserModel } from "./user.model.js";
import { PublicUser, UpdateUserInput, User } from "./user.types.js";
import bcrypt

export const findUserById = async (id :string) => {
    const user = await UserModel.findById(id);
    if(!user) throw new AppError('User not found' , 404);
    
}

export const findAllUsers = async () : Promise<PublicUser[]>=> {
    const users = await UserModel.findAll();
    if(!users) throw new AppError('Users not found ' , 404);
    return users;
}

export const updateUserById = async (id : string , changes : UpdateUserInput) =>{
    const user = await UserModel.updateById(id , changes );
    if(!user) throw new AppError('Unable to update user' , 404 )
}

export const deleteUserById = async (id : string ) => {
    const deleted = await UserModel.deleteById(id);
    if(!deleted) throw new AppError('User for deletion not found ' , 404);
}