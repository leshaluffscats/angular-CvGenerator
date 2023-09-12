import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_CV_URL } from 'src/app/shared/constants/api.consts';
import { ICv, ICvDto } from 'src/app/shared/interfaces/cv.interface';

@Injectable({
  providedIn: 'root',
})
export class CvApiService {
  constructor(private http: HttpClient) {}

  public addCv(cv: ICv): Observable<ICvDto> {
    return this.http.post<ICvDto>(API_CV_URL, cv);
  }
}
