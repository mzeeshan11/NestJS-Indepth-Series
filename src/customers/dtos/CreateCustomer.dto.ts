import { Type } from "class-transformer";
import { IsEmail, IsNumberString, IsNotEmpty, ValidateNested, IsNotEmptyObject } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";

export class CreateCustomerDto {

    @IsNumberString()
    @IsNotEmpty()
    id: number;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    name: string;

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(() => CreateAddressDto)
    address: CreateAddressDto


}