import { makeObservable, observable, computed } from "mobx";
import { IToDoModel } from "../model/ToDoModel";

export class ToDoViewModel {
    constructor( private _todo: IToDoModel) {
        makeObservable(this, {
            label: computed,
            done: computed
        });
    }

    public get label(): string {
        return this._todo.label;
    }

    public get id(): number {
        return this._todo.id;
    }

    public get done(): boolean {
        return this._todo.done;
    }

    // TODO: can Y create an async setter?
    public set done(isDone: boolean) {
        this._todo.done = isDone;
    }
}