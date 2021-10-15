import { IsNotEmpty } from "class-validator";

export class CreateEmployyeStudyDto {
    @IsNotEmpty()
    year: string;
    @IsNotEmpty()
    endeded: string;
}
