import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Category } from '../model/category.model';
import { environment } from '@environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  private http = inject(HttpClient);
  private urlApi = `${environment.ecommerce_api}/categories`;

  findAll() {
    return this.http.get<Category[]>(this.urlApi);
  }

}
