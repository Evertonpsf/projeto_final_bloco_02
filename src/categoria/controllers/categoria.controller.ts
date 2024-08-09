import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { Categoria } from "../entities/categoria.entity";
import { CategoriaService } from "../service/categoria.service";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";


@ApiTags('Categoria')
@Controller("/categorias")
export class CategoriaController {

    constructor(private readonly categoriaService: CategoriaService) { }

    @Get()
    @HttpCode(HttpStatus.OK)
    findAll(): Promise<Categoria[]> {
        return this.categoriaService.findAll();
    }

    @Get('/:id')
    @HttpCode(HttpStatus.OK)
    findById(@Param('id', ParseIntPipe) id: number): Promise<Categoria> {
        return this.categoriaService.findById(id);
    }

    @Get('/descricao/:descricao')
    @HttpCode(HttpStatus.OK)
    findByTipo(@Param('descricao',) descricao: string): Promise<Categoria[]> {
        return this.categoriaService.findByTipo(descricao);
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() produto: Categoria): Promise<Categoria> {
        return this.categoriaService.create(produto);
    }

    @Put()
    @HttpCode(HttpStatus.OK)
    update(@Body() produto: Categoria): Promise<Categoria> {
        return this.categoriaService.update(produto);
    }
    @Delete('/:id')
    @HttpCode(HttpStatus.NO_CONTENT)
    delete(@Param('id', ParseIntPipe) id: number) {
        return this.categoriaService.delete(id);

    }

}