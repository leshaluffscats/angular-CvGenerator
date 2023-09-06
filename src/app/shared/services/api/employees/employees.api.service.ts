import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_EMPLOYEES_URL } from '../../../constants/api.consts';
import { Observable, map } from 'rxjs';
import {
  IEmployeeData,
  IEmployeeDto,
} from 'src/app/shared/interfaces/employees.interface';

@Injectable({
  providedIn: 'root',
})
export class EmployeesApiService {
  constructor(private http: HttpClient) {}

  public getEmployees(): Observable<IEmployeeData[]> {
    return this.http.get<IEmployeeDto[]>(API_EMPLOYEES_URL).pipe(
      map((employees: IEmployeeDto[]) => {
        return employees.map((employee: IEmployeeDto) => ({
          ...employee,
          department: employee.department.name,
          specialization: employee.specialization.name,
        }));
      }),
    );
  }
  public addEmployee(employee: IEmployeeData): Observable<IEmployeeDto> {
    return this.http.post<IEmployeeDto>(API_EMPLOYEES_URL, employee);
  }
}
