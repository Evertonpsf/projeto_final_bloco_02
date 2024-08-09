import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModules } from './categoria/categoria.module';
import { Produto } from './produto/entities/produto.entity';
import { ProdutoModules } from './produto/produto.module';
import { AppController } from './app.controller';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_farmacia',
    entities: [Categoria, Produto],
    synchronize: true,
  
  }),
 CategoriaModules,
 ProdutoModules,
],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
