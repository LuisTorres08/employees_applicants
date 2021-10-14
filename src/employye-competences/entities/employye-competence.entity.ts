import { Competence } from "src/competences/entities/competence.entity";
import { Employee } from "src/employees/entities/employee.entity";
import { Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";


@Entity()
export class EmployyeCompetence {

    @PrimaryGeneratedColumn()
    id: number;
    
    @ManyToOne(() => Competence, competence => competence.employeecompetence)
    competence: Competence[];

    @ManyToOne(() => Employee, employee => employee.employeecompetence)
    employee: Employee[];
}