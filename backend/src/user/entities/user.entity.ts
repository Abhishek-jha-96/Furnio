import { ObjectType, Field, Int } from '@nestjs/graphql';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  @Field(() => Int)
  id: number;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  email: string;

  @Column({ nullable: true })
  @Field({ nullable: true })
  age?: number;

  @Column({ default: true })
  @Field()
  isActive: boolean;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @Column({ length: 255 })
  @Field()
  password: string;
}
