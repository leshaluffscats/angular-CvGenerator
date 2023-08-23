import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_EMPLOYEES_URL } from '../../../constants/api.consts';

@Injectable({
  providedIn: 'root',
})
export class EmployeesApiService {
  constructor(private http: HttpClient) {}

  public getEmployees() {
    return this.http.get(API_EMPLOYEES_URL);
  }
}
