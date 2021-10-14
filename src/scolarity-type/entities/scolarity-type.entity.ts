import { EmployyeStudy } from "src/employye-studies/entities/employye-study.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm";

@Entity()
export class ScolarityType {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;
    
    @OneToMany(() => EmployyeStudy, employeestudy => employeestudy.scolaritytype)
    employeestudy: EmployyeStudy[];
}
