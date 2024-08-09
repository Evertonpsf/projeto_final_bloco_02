import { IsNotEmpty, IsNumber } from "class-validator";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "../../categoria/entities/categoria.entity";
import { ApiProperty } from "@nestjs/swagger";


@Entity({name: "tb_produtos"})
export class Produto {

    @PrimaryGeneratedColumn({type: 'bigint'})
    @ApiProperty()
    id: number;

        @IsNotEmpty()
    @Column({length: 255, nullable: false })
    @ApiProperty()
    nome: string;

    @IsNotEmpty()
    @Column({length: 255, nullable: false })
    @ApiProperty()
    quantidade: string;
    
    @IsNumber({maxDecimalPlaces: 2})
    @IsNotEmpty()
    @Column({ type: "decimal", precision: 10, scale: 2})
    @ApiProperty()
    preco: number;

    @Column()
    @ApiProperty()
    foto: string;

    @ApiProperty({type:() => Categoria})
    @ManyToOne(() => Categoria, (categoria) => categoria.produto, {
        onDelete: "CASCADE"
    })

    categoria: Categoria; 
  
}