export class Attributes<T> {

    constructor( private data: T){}

    get = <K extends keyof T>(key: K): T[K] => {
        return this.data[key];
    }

    set(update: T): void {
        Object.assign(this.data, update);
    }

    getAll(): T {
        return this.data
    }
}



/* Notes
1. Made class a generic type of <T>
2.  get<K extends keyof T> <-- Setting up generic constraint stating that K can only be a key of T --> (key: K): T[K]{
        return this.data[key];
    }
3. Example: 
const attrs = new Attributes<UserProps>( {
    id: 5, 
    age: 20,
    name: 'Xavier'
} )

const name = attrs.get('name')
*/