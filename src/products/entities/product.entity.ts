import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  productId: number;

  @ApiProperty()
  @Column({ nullable: false })
  productTitle: string;

  @ApiProperty()
  @Column({ nullable: false })
  productDetails: string;

  @ApiProperty()
  @Column({ nullable: false })
  price: string;

}
