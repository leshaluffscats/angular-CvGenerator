import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  Observable,
  combineLatest,
  concatMap,
  delay,
  forkJoin,
  map,
  of,
} from 'rxjs';
import { API_CV_URL } from 'src/app/shared/constants/api.consts';
import { ICv, ICvDto } from 'src/app/shared/interfaces/cv.interface';
import { CvsService } from '../../cvs/cvs.service';

@Injectable({
  providedIn: 'root',
})
export class CvApiService {
  constructor(
    private http: HttpClient,
    private cvService: CvsService,
  ) {}

  public addCvs(cvs: ICv[], employeeId?: number): Observable<ICvDto[]> {
    const cvsObservables = cvs.map((cv, index) => {
      const newcv = { ...cv };

      if (employeeId) {
        newcv.employeeId = employeeId;
      }

      delete newcv.id;
      delete newcv.isNew;

      return this.addCv(newcv, index);
    });

    return forkJoin(cvsObservables);
  }

  public updateCvs(cvs: ICv[]): Observable<ICvDto[]> {
    return combineLatest(cvs.map((cv, index) => this.updateCv(cv, index)));
  }

  public deleteCv(id: number): Observable<ICvDto> {
    return this.http.delete<ICvDto>(`${API_CV_URL}/${id}`);
  }

  public loadCvById(id: string): Observable<ICv> {
    return this.http
      .get<ICvDto>(`${API_CV_URL}/${id}`)
      .pipe(map((cv: ICvDto) => this.cvService.tranformCvDtoToCv(cv)));
  }

  private addCv(cv: ICv, index: number) {
    return of(cv).pipe(
      delay(index * 300),
      concatMap(() => this.http.post<ICvDto>(API_CV_URL, cv)),
    );
  }

  private updateCv(cv: ICv, index: number) {
    return of(cv).pipe(
      delay(index * 300),
      concatMap(() => this.http.put<ICvDto>(`${API_CV_URL}/${cv.id}`, cv)),
    );
  }
}
