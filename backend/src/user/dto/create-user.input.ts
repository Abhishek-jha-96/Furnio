import { InputType, Int, Field } from '@nestjs/graphql';
import {
  IsBoolean,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  MaxLength,
  MinLength,
} from 'class-validator';

@InputType()
export class CreateUserInput {
  @Field()
  @IsNotEmpty()
  @MaxLength(100)
  name: string;

  @Field()
  @IsEmail()
  email: string;

  @Field(() => Int, { nullable: true })
  @IsOptional()
  age: number;

  @Field()
  @IsBoolean()
  isActive: boolean;

  @Field()
  @IsNotEmpty()
  createdAt: Date;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  @MaxLength(255)
  password: string;
}
