/* eslint-disable @typescript-eslint/no-misused-promises */
import { BrowserWindow, ipcMain } from "electron";
import IpcBodyInterface from "ipcBody.interface";
import { getUserAll, getUserById, userCreate } from "user.queries";

export default function userController(window: BrowserWindow): void {
  ipcMain.on('createUser', async (event, args) => {
    const { data } = args;
    let response: IpcBodyInterface;

    try {
      const user = await userCreate(data);

      response = {
        data: user,
        status: 'ok'
      };
    } catch (error) {
      response = {
        data: error,
        status: 'error'
      };
    } finally {
      event.returnValue = response;
    }
  });

  ipcMain.on('getUserById', async (event, args) => {
    const { data, queryParams } = args;
    let response: IpcBodyInterface;

    try {
      const user = await getUserById(queryParams.id);

      response = {
        data: user,
        status: 'ok'
      };
    } catch (error) {
      response = {
        data: error,
        status: 'error'
      };
    } finally {
      event.returnValue = response;
    }
  });

  ipcMain.on('getUserAll', async (event, args) => {
    let response: IpcBodyInterface;

    try {
      const user = await getUserAll();

      response = {
        data: user,
        status: 'ok'
      };
    } catch (error) {
      response = {
        data: error,
        status: 'error'
      };
    } finally {
      event.returnValue = response;
    }
  });
}