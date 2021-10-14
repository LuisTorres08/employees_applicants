import { WorkRecord } from "src/work-records/entities/work-record.entity";
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne} from "typeorm";

@Entity()
export class JobTitle {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    description: string;

    @ManyToOne(() => WorkRecord, workrecord => workrecord.jobtitle)
    workrecord: WorkRecord[];
}

