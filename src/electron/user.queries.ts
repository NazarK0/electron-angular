import { PrismaClient } from '@prisma/client';
import UserInterface from './user.interface';
import UserInputInterface from './userInput.interface';

const prisma = new PrismaClient();

export async function userCreate(userInput: UserInputInterface): Promise<UserInterface> {
  try {
    const user = await prisma.user.create({
      data: userInput
    });

    return user;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getUserById(id: number): Promise<UserInterface> {
  try {
    const user = await prisma.user.findUnique({
      where: { id },
    });

    return user;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

export async function getUserAll(): Promise<UserInterface[]> {
  try {
    const user = await prisma.user.findMany();

    return user;
  } catch (error) {
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

