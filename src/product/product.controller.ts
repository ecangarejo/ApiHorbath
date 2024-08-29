import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ProductService } from './product.service';
import { CreateProductDto } from './dto/create-product.dto';
import { Product } from './entities/product.entity';
import { UpdateProductDto } from './dto/update-product.dto';
import { ApiOperation, ApiParam, ApiResponse } from '@nestjs/swagger';

@Controller('products')
export class ProductController {
    constructor(
        private readonly productService: ProductService
    ) {}

    @Post()
    @ApiOperation({ summary: 'Crea un nuevo producto' })
    @ApiResponse({ status: 201, description: 'El producto ha sido creado satisfactoriamente', type: Product })
    @ApiResponse({ status: 400, description: 'Entrada no válida' })
    async create(@Body() createProductDto: CreateProductDto): Promise<Product> {
        return this.productService.create(createProductDto);
    }

    @Get()
    @ApiOperation({ summary: 'Obtener todos los productos' })
    @ApiResponse({ status: 200, description: 'Listado de productos', type: [Product] })
    async findAll(): Promise<Product[]> {
        return this.productService.findAll();
    }

    @Get(':id')
    @ApiOperation({ summary: 'Obtener un producto por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del producto' })
    @ApiResponse({ status: 200, description: 'Detalle del producto', type: Product })
    @ApiResponse({ status: 404, description: 'Product no encontrado' })
    async findOne(@Param('id') id: number): Promise<Product> {
        return this.productService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({ summary: 'Producto actualizado por Id' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del producto' })
    @ApiResponse({ status: 200, description: 'El producto ha sido actualizado exitosamente', type: Product })
    @ApiResponse({ status: 400, description: 'Entrada no válida' })
    @ApiResponse({ status: 404, description: 'Producto no encontrado' })
    async update(
        @Param('id') id: number,
        @Body() updateProductDto: UpdateProductDto,
    ): Promise<Product> {
        return this.productService.update(id, updateProductDto);
    }

    @Delete(':id')
    @ApiOperation({ summary: 'Producto eliminado por ID' })
    @ApiParam({ name: 'id', type: Number, description: 'ID del producto' })
    @ApiResponse({ status: 204, description: 'El producto ha sido eliminado exitosamente' })
    @ApiResponse({ status: 404, description: 'Product no encontrado' })
    async remove(@Param('id') id: number): Promise<void> {
        return this.productService.remove(id);
    }
}
