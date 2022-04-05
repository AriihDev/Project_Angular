import { Subject } from "rxjs";
import { User } from "../models/User.model";

export class UserService {

    private users: User[] = [
        
        {
            firstName:'George',
            lastName:'Clooney',
            email:'Clooney@angular.com',
            drinkPreference:' café',
            hobbies: [
                'Golf',
                'Casinp'
                
            ]
        }
    ];
    userSubject = new Subject<User[]>();

    emitUsers() {
        this.userSubject.next(this.users.slice());
    }

    addUser(user: User) {
        this.users.push(user);
        this.emitUsers();
    }
}