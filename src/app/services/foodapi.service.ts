import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FoodapiService {

  constructor(private httpclient:HttpClient) { }

  getmeals():Observable <any>{
    return this.httpclient.get('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  }
  getmealDetails(id: string|null):Observable <any>{
    return this.httpclient.get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
  }

  getMealsCategory(catname:string){

    return this.httpclient.get(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${catname}`)
  }
}
