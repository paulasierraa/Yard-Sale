import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { CreateProductDTO, Product, UpdateProductDTO } from '../models/product.model';
import { catchError, map, retry } from 'rxjs/operators'
import Swal from 'sweetalert2';
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _controller: string = "products";
  constructor(private http: HttpClient) { }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(`${environment.apiUrl + this._controller}/${productId}`).
      pipe(
        catchError((error: HttpErrorResponse) => {
          if (error.status == 500) {
            return throwError('El servicio está fallando , porfavor intenta más tarde');
          }
          return throwError('Algo salió mal');
        })
      );
  }
  getProductsByPage(limit: number, offset: number): Observable<Product[]> {
    let paramsQuery = new HttpParams();
    if (limit != undefined && offset != undefined) {
      paramsQuery = paramsQuery.append("limit", limit.toString());
      paramsQuery = paramsQuery.append("offset", offset.toString())
    }
    return this.http.get<Product[]>(`${environment.apiUrl + this._controller}`, { params: paramsQuery })
      .pipe(
        retry(3),
        map(products => products.map(item => { return { ...item, taxes: .19 * item.price } }))

      );
  }
  createProduct(product: CreateProductDTO): Observable<Product> {
    return this.http.post<Product>(`${environment.apiUrl + this._controller}`, product);
  }
  updateProduct(product: UpdateProductDTO, productId: string): Observable<Product> {
    return this.http.put<Product>(`${environment.apiUrl + this._controller}/${productId}`, product);
  }
  handlerError(error) {

  }
}
