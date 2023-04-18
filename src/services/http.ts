import { injectable } from "inversify";

export interface IHTTPService {
    fetch(input: string): Promise<any>;
}

@injectable()
export class HTTPService implements IHTTPService {
    public fetch(input: string) {
        return new Promise<any>((resolve, _) => {
            if (input.startsWith('/todo')) {

                setTimeout( () => {
                    resolve ([{
                        id: 1,
                        label: 'Test 1',
                        done: false
                    }, {
                        id: 2,
                        label: 'Test 2',
                        done: false
                    }, {
                        id: 3,
                        label: 'Test 3',
                        done: false
                    }]);
                }, 5000)
                
            } else {
                resolve(null);
            }
            
        })
    }
}