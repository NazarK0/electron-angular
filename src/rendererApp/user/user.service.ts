import { Injectable } from '@angular/core';
import { IpcRenderer } from 'electron'
import { Observable, of } from 'rxjs';
import UserInterface from 'src/electron/entities/user/user.interface';
import UserInputInterface from 'src/electron/entities/user/userInput.interface';
import IpcBodyInterface from '../ipcBody.interface';


@Injectable()
export default class UserService {

  private ipc!: IpcRenderer

  constructor() {
    if ((<any>window).require) {
      try {
        this.ipc = (<any>window).require('electron').ipcRenderer
      } catch (error) {
        throw error
      }
    } else {
      console.error('Could not load electron ipc')
    }
  }

  create(input: UserInputInterface): Observable<UserInterface> {
    const response: IpcBodyInterface = this.ipc.sendSync('createUser', { data: input });
    if (response.status === 'ok') {
      return of(response.data);
    } else {
      throw new Error(response.data);
    }
  }

  getById(id: number): Observable<UserInterface> {
    const response: IpcBodyInterface = this.ipc.sendSync('getUserById', { queryParams: { id } });

    if (response.status === 'ok') {
      return of(response.data);
    } else {
      throw new Error(response.data);
    }
  }

  getAll(): Observable<UserInterface[]> {
    const response: IpcBodyInterface = this.ipc.sendSync('getUserAll');

    if (response.status === 'ok') {
      return of(response.data);
    } else {
      throw new Error(response.data);
    }
  }
}
