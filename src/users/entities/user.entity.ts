import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Employee } from "src/employees/entities/employee.entity";
import { Applicant } from "src/applicant/entities/applicant.entity";

@Entity()
export class  User {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Applicant, applicant => applicant.user)
    applicant: Applicant[];

    @OneToMany(() => Employee, employee => employee.user)
    employee: Employee[];
    
}
