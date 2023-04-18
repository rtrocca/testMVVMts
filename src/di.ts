import { Container } from 'inversify';
import { ToDosModel } from './model/ToDoModel';
import { HTTPService } from './services/http';
import { AppViewModel } from './viewmodels/AppViewModel';
import { ToDoListViewModel } from './viewmodels/ToDoListViewModel';

export const container = new Container();

export function registerDependencies() {
    container.bind('http').to(HTTPService);
    container.bind('todos').to(ToDosModel).inSingletonScope();
    container.bind('todosList').to(ToDoListViewModel).inSingletonScope();
    container.bind('appview').to(AppViewModel).inSingletonScope();
}