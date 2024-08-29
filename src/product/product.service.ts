import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';
import { Repository } from 'typeorm';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Injectable()
export class ProductService {

    constructor(
        @InjectRepository(Product)
        private readonly productRepository: Repository<Product>,
    ) {}

    async create(createProductDto: CreateProductDto): Promise<Product> {
        const product = this.productRepository.create(createProductDto);
        return this.productRepository.save(product);
    }
    
    async findAll(): Promise<Product[]> {
        return this.productRepository.find();
    }
    
    async findOne(id: number): Promise<Product> {
        const product = await this.productRepository.findOneBy({ id });

        if (!product) {
          throw new NotFoundException(`No se encontró el producto con el ID: ${id}`);
        }

        return product;
    }
    
    async update(id: number, updateProductDto: UpdateProductDto): Promise<Product> {
        await this.findOne(id);
        await this.productRepository.update(id, updateProductDto);
        return this.findOne(id);
    }
    
    async remove(id: number): Promise<void> {
        const result = await this.productRepository.delete(id);
        
        if (result.affected === 0) {
          throw new NotFoundException(`No se encontró el producto con el ID: ${id}`);
        }
    }
}
