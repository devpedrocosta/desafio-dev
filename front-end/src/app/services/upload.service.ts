import { Injectable } from '@angular/core';
import { HttpClient, HttpEvent, HttpErrorResponse, HttpEventType, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UploadService {
  SERVER_URL: string = "http://127.0.0.1:3000/api/";
  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData: FormData = new FormData();

    formData.append('file', file);

    const req = new HttpRequest('POST', `${this.SERVER_URL}upload`, formData);

    return this.http.request(req);
  }

  getUploadedData(): Observable<any> {
    return this.http.get(`${this.SERVER_URL}`);
  }

}
