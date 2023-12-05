import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LeadService {

  constructor(private httpClient: HttpClient){}

  public getAll(): Observable<any>{
    return this.httpClient.get<any>(
      'https://656ee8ab6529ec1c6236e83b.mockapi.io/api/lead/leads'
    )
  }

  public getByPaginator(page: number, countItem: number): Observable<any>{
    let queryParams = new HttpParams();
    queryParams = queryParams.append('completed', false);
    queryParams = queryParams.append('page', page);
    queryParams = queryParams.append('limit', countItem);
    return this.httpClient.get<any>(
      'https://656ee8ab6529ec1c6236e83b.mockapi.io/api/lead/leads', { params: queryParams }
    )
  }
}
