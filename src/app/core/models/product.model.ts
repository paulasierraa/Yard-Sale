export class Product {
    id: string;
    title: string;
    price: number;
    images: string[];
    description: string;
    statusDetail: 'loading'|'success'|'error'|'init'='init';
}
export interface CreateProductDTO extends Omit<Product,'id'|'category'>
{
    categoryId:number;
}
/**
 * @Partial pone todos los parámetros opcionales
 */
export interface UpdateProductDTO extends Partial<CreateProductDTO>
{

}