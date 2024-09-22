import { ObjectType, Field } from '@nestjs/graphql';
import { Exclude } from 'class-transformer';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  @Field(() => String)
  uid: string;

  @Column()
  @Field()
  first_name: string;

  @Column()
  @Field({ nullable: true })
  last_name: string;

  @Column()
  @Field()
  email: string;

  @Column()
  @Field({ nullable: true })
  image: string;

  @Exclude()
  @Field()
  password: string;

  @Column({ default: true })
  @Field()
  isActive: boolean;

  @Column({ default: false })
  @Field()
  isVerified: boolean;

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @DeleteDateColumn()
  @Field({ nullable: true })
  deletedAt: Date;
}
