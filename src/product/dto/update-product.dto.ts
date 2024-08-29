import { IsDecimal, IsInt, IsNotEmpty, IsNumber, IsString, Min } from "class-validator";

export class UpdateProductDto {

    @IsString()
    @IsNotEmpty()
    readonly nombre?: string;

    @IsString()
    readonly descripcion?: string;

    @IsNumber({}, {message: 'El precio debe ser un valor decimal'})
    @IsNotEmpty()
    @Min(0, { message: 'El precio debe ser un valor positivo' }) 
    readonly precio?: number;

    @IsInt()
    @IsNotEmpty()
    @Min(0, { message: 'La cantidad debe ser un valor positivo' })
    readonly cantidad?: number;

}