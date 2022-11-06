import { Injectable } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { SerializedUser, User } from 'src/users/types';

@Injectable()
export class UsersService {
    private users: User[] = [
        {
            username: 'zee',
            password: 'admin@124'
        },
        {
            username: 'mrharis',
            password: 'admin@124'
        },
        {
            username: 'zeeshan',
            password: 'admin@124'
        }
    ]

    getUsers() {
        return this.users.map((user) => plainToClass(SerializedUser, user))
    }
    getUserByUsername(username: string) {
        return this.users.find((user) => user.username === username)
    }
}
