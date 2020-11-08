import {User} from './models/User';

const user = User.build( { id: 1 } );

user.on( 'change', () => {
    console.info( user );
} );

user.fetch();









/* Notes
const user = new User( { name: 'new record', age: 0 } );

console.log( user.get( 'name' ) );

user.on( 'change', () => {
    console.log( 'User was changed' );
} );

user.set( { name: 'New name' } );

*/