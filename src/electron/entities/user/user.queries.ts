import dbConnect from 'dbConnect';
import UserInterface from './user.interface';
import User from './user.model';
import UserInputInterface from './userInput.interface';

export async function userCreate(userInput: UserInputInterface): Promise<UserInterface> {
  if (userInput) {
    try {
      const user: UserInterface = await User.create(userInput);
      return user;
    } catch (error) {
      throw error;
    }
  } else throw new Error("No input data in UserCreate query")
}

export async function getUserById(id: number): Promise<UserInterface> {
  try {
    const user = await User.findByPk(id);
    return user;
  } catch (error) {
    throw error;
  }
}

export async function getUserAll(): Promise<UserInterface[]> {
  try {
    const userList = await User.findAll();
    return userList;
  } catch (error) {
    throw error;
  }
}

