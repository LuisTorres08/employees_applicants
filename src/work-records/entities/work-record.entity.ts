import { Employee } from "src/employees/entities/employee.entity";
import { JobTitle } from "src/job-titles/entities/job-title.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany} from "typeorm";

@Entity()
export class WorkRecord {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    begin_date: string;

    @Column()
    end_date: string;

    @Column()
    company_name: string;

    @Column()
    boss_name: string;

    @Column()
    phone_name: string;

    @ManyToOne(() => Employee, employee => employee.workrecord)
    employee: Employee[];

    @OneToMany(() => JobTitle, jobtitle => jobtitle.workrecord)
    jobtitle: JobTitle[];
}

