import { User } from 'src/user/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Todo {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  Date: string;

  @Column()
  Completed: boolean;

  //many todos can belong tp one user
  @ManyToOne(() => User, (user) => user.todos)
  user: User;
}
