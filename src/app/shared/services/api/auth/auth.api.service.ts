import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_AUTH_URL } from '../../../constants/api.consts';
import { Observable } from 'rxjs';
import { IJwt, IUser } from '../../../interfaces/api.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  public login(user: IUser): Observable<IJwt> {
    return this.http.post<IJwt>(`${API_AUTH_URL}/login`, user);
  }
}
