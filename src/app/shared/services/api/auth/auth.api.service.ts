import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_AUTH_URL } from '../../../constants/api.consts';
import { Observable } from 'rxjs';
import { IJwt, IAuthCredentials } from '../../../interfaces/auth-api.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthApiService {
  constructor(private http: HttpClient) {}

  public login(user: IAuthCredentials): Observable<IJwt> {
    return this.http.post<IJwt>(`${API_AUTH_URL}/login`, user, {
      withCredentials: true,
    });
  }

  public refreshToken(): Observable<IJwt> {
    return this.http.get<IJwt>(`${API_AUTH_URL}/refresh`, {
      withCredentials: true,
    });
  }

  public logout(): Observable<void> {
    return this.http.get<void>(`${API_AUTH_URL}/logout`, {
      withCredentials: true,
    });
  }
}
