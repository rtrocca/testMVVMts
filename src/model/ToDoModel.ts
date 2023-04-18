import { inject, injectable } from "inversify";
import type { IHTTPService } from "../services/http";

export interface IToDoModel {
    id: number;
    label: string;
    done: boolean;
}

export interface IToDosModel {
    retrieveData(): Promise<null | IToDoModel[]>;
}

@injectable()
export class ToDosModel implements IToDosModel {

    private retrievePromise: null | Promise<IToDoModel[]>;
    
    public constructor(
        @inject('http') private readonly _http: IHTTPService
    ) {
        this.retrievePromise = null;
    }

    public retrieveData() {
        if (!this.retrievePromise) {
            this.retrievePromise = this._http.fetch('/todo');
            this.retrievePromise.finally( () => {
                this.retrievePromise = null;
            });
        }
        return this.retrievePromise;
    }
}