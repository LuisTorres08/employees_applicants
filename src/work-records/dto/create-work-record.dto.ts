import { IsNotEmpty } from "class-validator";

export class CreateWorkRecordDto {
    @IsNotEmpty()
    begin_date: string;
    @IsNotEmpty()
    end_date: string;
    @IsNotEmpty()
    company_name: string;
    @IsNotEmpty()
    boss_name: string;
    @IsNotEmpty()
    phone_company: string;
    
}


