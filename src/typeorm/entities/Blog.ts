import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Comment } from './Comment';

@Entity({ name: 'blogs' })
export class Blog {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  header: string;

  @Column({ type: 'longtext' })
  body: string;

  @Column()
  createdAt: Date;

  @OneToMany(() => Comment, (comment) => comment.blog)
  comments: Comment[];
}
