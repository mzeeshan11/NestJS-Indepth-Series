import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
    findCustomer() {
        return {
            id: 1,
            email: "zee@gmail.com",
            name: "Mr.Zeeshan",
        }
    }
}
