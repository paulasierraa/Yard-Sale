import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { CreateProductDTO, Product, UpdateProductDTO } from '../models/product.model';
import {retry} from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _controller: string = "products";
  constructor(private http: HttpClient) { }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl + this._controller}/${productId}`);
  }
  getProductsByPage(limit: number, offset: number): Observable<Product[]> {
    let paramsQuery = new HttpParams();
    if(limit!=undefined&&offset!=undefined)
    {
      paramsQuery = paramsQuery.append("limit", limit.toString());
      paramsQuery = paramsQuery.append("offset", offset.toString())
    }
    return this.http.get<Product[]>(`${environment.apiUrl + this._controller}`, { params: paramsQuery }).pipe(retry(3));
  }
  createProduct(product: CreateProductDTO): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl + this._controller}`, product);
  }
  updateProduct(product: UpdateProductDTO, productId: number): Observable<Product> {
    return this.http.put<Product>(`${environment.apiUrl + this._controller}/${productId}`, product);
  }
}
