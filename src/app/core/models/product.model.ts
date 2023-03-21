export interface Product {
    id: string;
    title: string;
    price: number;
    images: string[];
    description: string;
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