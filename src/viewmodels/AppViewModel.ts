import { injectable, inject } from "inversify";
import { makeObservable } from "mobx";


import type {IToDoListViewModel} from './ToDoListViewModel';
export interface IAppViewModel {
    todoList: IToDoListViewModel;
}

@injectable()
export class AppViewModel implements IAppViewModel{

    constructor(@inject('todosList') private readonly _todoList: IToDoListViewModel) {
        makeObservable(
            this, 
            {}
        );
    }

    public get todoList(): IToDoListViewModel {
        return this._todoList;
    }

}