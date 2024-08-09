import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CategoriaModules } from "../categoria/categoria.module";
import { CategoriaService } from "../categoria/service/categoria.service";
import { Produto } from "./entities/produto.entity";
import { ProdutoService } from "./service/produto.service";
import { ProdutoController } from "./controllers/produto.controller";


@Module({
    imports: [TypeOrmModule.forFeature([Produto]), CategoriaModules], 
    providers: [ProdutoService, CategoriaService],
    controllers: [ProdutoController], 
    exports: [TypeOrmModule], 

})

export class ProdutoModules {}