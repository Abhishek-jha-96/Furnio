import { ObjectType, Field } from '@nestjs/graphql';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@ObjectType()
@Entity()
export class Product {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;

  @Column()
  @Field()
  price: number;

  @Column()
  @Field()
  rating: string; // fk

  @Column()
  @Field()
  category: string; // fk

  @OneToOne((type) => ImageLinks, (imageLinks) => imageLinks.id, {
    cascade: true,
  })
  @Field()
  imageLinks: ImageLinks[];

  @Column()
  @Field()
  sizeType: string;

  @Column()
  @Field()
  color: string;

  @OneToMany((type) => Tags, (tags) => tags.id, { cascade: true })
  @Field()
  tags: Tags[];

  @CreateDateColumn()
  @Field()
  createdAt: Date;

  @DeleteDateColumn()
  @Field()
  deletedAt: Date;

  @Column()
  @Field()
  description: string;

  @Column()
  @Field()
  addInfo: string;

  @ManyToOne((type) => GeneralDetail, (generalDetail) => generalDetail.id, {
    cascade: true,
  })
  @Field()
  generalDetail: GeneralDetail[];

  @ManyToOne((type) => ProductDetails, (productDetails) => productDetails.id, {
    cascade: true,
  })
  @Field()
  productDetails: ProductDetails[];

  @Column()
  @Field()
  dimension: string; // fk

  @Column()
  @Field()
  warranty: string; // fk

  @Column()
  @Field()
  review: string; // fk
}

@ObjectType()
@Entity()
export class ImageLinks {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  url: string;

  @Column()
  @Field()
  uploadedBy: string;
}

@ObjectType()
@Entity()
export class Tags {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  name: string;
}

@ObjectType()
@Entity()
export class GeneralDetail {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  salesPackage: string;

  @Column()
  @Field()
  modelNumber: string;

  @Column()
  @Field()
  secondaryMaterial: string;

  @Column()
  @Field()
  configuration: string;

  @ManyToOne(
    (type) => UpholesteryMaterial,
    (upholsteryMaterial) => upholsteryMaterial.id,
    { cascade: true },
  )
  @Field()
  upholsteryMaterial: UpholesteryMaterial[];

  @Column()
  @Field()
  upholsteryColor: string;
}

@ObjectType()
@Entity()
export class UpholesteryMaterial {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  materialName: string;
}

@ObjectType()
@Entity()
export class ProductDetails {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @ManyToOne(
    (type) => FillingMaterial,
    (fillingMaterial) => fillingMaterial.id,
    { cascade: true },
  )
  @Field()
  fillingMaterial: FillingMaterial[];

  @Column()
  @Field()
  FinishType: string;

  @Column()
  @Field()
  Adjustable: boolean;

  @Column()
  @Field()
  MaxLoadCapacity: number;

  @Column()
  @Field()
  OriginOfManufacture: string;
}

@ObjectType()
@Entity()
export class FillingMaterial {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  materialName: string;
}

@ObjectType()
@Entity()
export class Dimension {
  @PrimaryGeneratedColumn('uuid')
  @Field()
  id: string;

  @Column()
  @Field()
  width: number;

  @Column()
  @Field()
  height: number;

  @Column()
  @Field()
  Depth: number;

  @Column()
  @Field()
  weight: number;

  @Column()
  @Field()
  seatHeight: string;

  @Column()
  @Field()
  legHeight: string;
}
