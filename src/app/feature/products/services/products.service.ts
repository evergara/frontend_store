import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { environment } from '@environments/environment';
import { Product } from '../model/product.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private http = inject(HttpClient);
  private urlApi = `${environment.ecommerce_api}/products`;

  findAll(categoryId: string): Observable<Product[]> {
    const url = new URL(this.urlApi);

    if (categoryId) {
      url.searchParams.set('categoryId', categoryId);
    }

    return this.http.get<Product[]>(url.toString());
  }

  findId(uuid: string): Observable<Product> {
    return this.http.get<Product>(`${this.urlApi}/${uuid}`);
  }
}
