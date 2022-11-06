import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';

@Injectable()
export class CustomersService {
    private customers = [
        {
            id: 1,
            email: "zee@gmail.com",
            name: "Mr.Zeeshan",
        },
        {
            id: 2,
            email: "zee@gmail.com",
            name: "Mr.Zeeshan",
        },
        {
            id: 3,
            email: "zee@gmail.com",
            name: "Mr.Zeeshan",
        }
    ]
    findCustomerById(id: number) {
        return this.customers.find((user) => user.id === id)
    }
    getCustomers() {
        return this.customers;
    }
    createCustomer(customerDto: CreateCustomerDto) {
        this.customers.push(customerDto)
    }
}
