import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';
import { Record } from './record.module';

const httpOptions = {
  headers: new HttpHeaders({ 
    'Content-Type': 'multipart/form-data',
    'Accept': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FileuploadService {
  
  private fileValidationURL = "http://localhost:9090/FileUpload/upload";

  constructor(private httpClient: HttpClient) { }

  uploadFileToBackEnd(file: File): Observable<Record[]>{
    const formData : FormData = new FormData();
    formData.append('file',file);
    return this.httpClient.post<Record[]>(this.fileValidationURL, formData, httpOptions)
    .pipe(tap((record: Record[])=> console.log(record)),
    catchError(this.handleErrors)
    );
  }
 
getAllRecords(): Observable<Record[]> {
  return this.httpClient.post<Record[]>('http://localhost:9090/FileUpload/post/panneerselvam/nithiyanantham', httpOptions)
  .pipe(tap((record: Record[]) => console.log(`added product w/ id=${record}`)),
    catchError(this.handleErrors)
  );
}
  
handleErrors(error) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // client-side error
    errorMessage = `Error: ${error.error.message}`;
  } else {
    // server-side error
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }
  window.alert(errorMessage);
  return throwError(errorMessage);
}
}


