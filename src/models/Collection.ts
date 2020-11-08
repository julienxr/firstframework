import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';


export class Collection<T, U> {
    constructor (
        public rootUrl: string,
        public deserialize: (json: U) => T
    ) { }

    models: T[] = [];
    events: Eventing = new Eventing();

    get on() {
        return this.events.on;
    }

    get trigger() {
        return this.events.trigger;
    }

    fetch(): void {
        axios.get( this.rootUrl )
            .then( ( response: AxiosResponse ): void => {
                response.data.forEach( ( value: U ) => {
                    this.models.push( this.deserialize(value) );
            })
        })
        this.trigger( 'change' );
    }
}