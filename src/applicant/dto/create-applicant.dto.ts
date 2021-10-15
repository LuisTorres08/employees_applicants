import { IsNotEmpty } from "class-validator";

export class CreateApplicantDto {
    @IsNotEmpty()
    name: string;
    @IsNotEmpty()
    lastname: string;
}

