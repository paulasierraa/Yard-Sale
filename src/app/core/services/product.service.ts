import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.prod';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private _controller: string = "products";
  constructor(private http: HttpClient) { }

  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>(`${environment.apiUrl + this._controller}`);
  }
}
