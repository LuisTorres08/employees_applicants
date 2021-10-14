import { EmployyeCompetence } from "src/employye-competences/entities/employye-competence.entity";
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";

@Entity()
export class Competence {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;  
    
    @OneToMany(() => EmployyeCompetence, employeecompetence => employeecompetence.competence)
    employeecompetence: EmployyeCompetence[];
}