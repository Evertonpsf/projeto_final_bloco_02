import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [
    TypeOrmModule.forRoot({
    // estamos fazendo a conexão com o banco de dados.
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root',
    database: 'db_farmacia',
    entities: [],
    synchronize: true,
   // logging: true,
   // bigNumberStrings: false,

  }),
 // CategoriaModules,
 // ProdutoModules,
],
  controllers: [],
  providers: [],
})
export class AppModule {}
