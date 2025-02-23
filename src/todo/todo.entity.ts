import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Entity sets the structure of table in SQLite
@Entity('todos')
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  todo: string;

  @Column({ default: false })
  done: boolean;
}
