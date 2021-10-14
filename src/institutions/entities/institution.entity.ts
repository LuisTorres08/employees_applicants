import { EmployyeStudy } from "src/employye-studies/entities/employye-study.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

@Entity()
export class Institution {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @OneToMany(() => EmployyeStudy, employeestudy => employeestudy.institution)
    employeestudy: EmployyeStudy[];
}
