import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { CategoriaModules } from './categoria/categoria.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_farmacia',
    entities: [Categoria],
    synchronize: true,
   // logging: true,
   // bigNumberStrings: false,
  }),
 CategoriaModules,
 // ProdutoModules,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
