import { Employee } from "src/employees/entities/employee.entity";
import { Institution } from "src/institutions/entities/institution.entity";
import { Profession } from "src/professions/entities/profession.entity";
import { ScolarityType } from "src/scolarity-type/entities/scolarity-type.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

@Entity()
export class EmployyeStudy {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    year: string;

    @Column()
    endeded: string;

    @ManyToOne(() => Employee, employee => employee.employeestudy)
    employee: Employee[];

    @ManyToOne(() => ScolarityType, scolaritytype => scolaritytype.employeestudy)
    scolaritytype: ScolarityType[];

    @ManyToOne(() => Institution, institution => institution.employeestudy)
    institution: Institution[];

    @ManyToOne(() => Profession, profession => profession.employeestudy)
    profession: Profession[];
}