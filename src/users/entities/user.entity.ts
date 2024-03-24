import { Entity,
         PrimaryGeneratedColumn,
          Column, 
          BeforeInsert,
         } 
    from "typeorm";

import * as bcrypt from 'bcrypt';
import { ApiProperty } from "@nestjs/swagger";

@Entity('users')
export class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  userId: number;

  @ApiProperty()
  @Column({ unique: true,nullable: false })
  username: string;

  @ApiProperty()
  @Column({ nullable: false })
  password: string;

  @BeforeInsert()
  async HashPassword() {
    this.password = await bcrypt.hash(this.password, 10);
  }
}
