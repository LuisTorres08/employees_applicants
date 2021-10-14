import { EmployyeCompetence } from "src/employye-competences/entities/employye-competence.entity";
import { EmployyeStudy } from "src/employye-studies/entities/employye-study.entity";
import { User } from "src/users/entities/user.entity";
import { WorkRecord } from "src/work-records/entities/work-record.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne } from "typeorm";

@Entity()
export class Employee {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    lastname: string;

    @OneToMany(() => EmployyeCompetence, employeecompetence => employeecompetence.employee)
    employeecompetence: EmployyeCompetence[];

    @OneToMany(() => EmployyeStudy, employeestudy => employeestudy.employee)
    employeestudy: EmployyeStudy[];

    @OneToMany(() => WorkRecord, workrecord => workrecord.employee)
    workrecord: WorkRecord[];

    @ManyToOne(() => User, user => user.employee)
    user: User[];
    
}

