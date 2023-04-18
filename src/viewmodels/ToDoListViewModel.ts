import { inject, injectable } from "inversify";
import type { IToDosModel } from "../model/ToDoModel";
import { computed, makeObservable, observable } from "mobx";
import { ToDoViewModel } from "./ToDoViewModel";

export interface IToDoListViewModel {
    load(): void;
    isLoading: boolean;
    todos: ToDoViewModel[]; //TODO need interface
}

@injectable()
export class ToDoListViewModel implements IToDoListViewModel {

    private _isLoading = false;
    private _todos: ToDoViewModel[] = [];

    constructor( @inject('todos') private readonly _todosService: IToDosModel) {
        makeObservable<ToDoListViewModel, '_isLoading' | '_todos'>(this, {
            isLoading: computed, //not sure computed is needed
            todos: computed,
            _isLoading: observable,
            _todos: observable,
        });
    }

    public load() {
        this._isLoading = true;
        this._todosService.retrieveData()
        .then( (data) => {
            this._todos = data!.map( td => new ToDoViewModel(td));
        }).finally(() => {
            this._isLoading = false;
        })
    }

    public get isLoading(): boolean {
        return this._isLoading;
    }

    public get todos() {
        return this._todos;
    }
}