import { inject, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { UploadService } from './upload.service';
import { HttpEvent, HttpEventType } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
describe('UploadService', () => {

  beforeEach(() => TestBed.configureTestingModule({
    imports: [ RouterTestingModule,HttpClientTestingModule ],
    providers: [UploadService]
  }));


  it('should be created', () => {
    const service: UploadService = TestBed.get(UploadService);
    expect(service).toBeTruthy();
   });

   it('should have getUploadedData function', () => {
    const service: UploadService = TestBed.get(UploadService);
    expect(service.getUploadedData()).toBeTruthy();
   });

   it('should have getUploadedData function', () => {
    const service: UploadService = TestBed.get(UploadService);
    expect(service.upload(new File([''], 'test-file.txt'))).toBeTruthy();
   });

   it(
    'should send upload',inject(
      [HttpTestingController, UploadService],
      (httpMock: HttpTestingController, uploadService: UploadService) => {
        const mockUsers = [
          { data: '----', hora: '---' },
        ];

        uploadService.upload(new File([''], 'test-file.txt')).subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockUsers);
          }
        });

        const mockReq = httpMock.expectOne(`${uploadService.SERVER_URL}upload`);
        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockUsers);

        httpMock.verify();
      }
    )
  );

  it(
    'should get data getUploadedData',inject(
      [HttpTestingController, UploadService],
      (httpMock: HttpTestingController, uploadService: UploadService) => {
        const mockUsers = [
          { data: '----', hora: '---' },
        ];

        uploadService.getUploadedData().subscribe((event: HttpEvent<any>) => {
          switch (event.type) {
            case HttpEventType.Response:
              expect(event.body).toEqual(mockUsers);
          }
        });

        const mockReq = httpMock.expectOne(uploadService.SERVER_URL);

        expect(mockReq.cancelled).toBeFalsy();
        expect(mockReq.request.responseType).toEqual('json');
        mockReq.flush(mockUsers);

        httpMock.verify();
      }
    )
  );

});
