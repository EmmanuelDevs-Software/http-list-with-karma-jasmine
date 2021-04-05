import { TestBed, getTestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { ApiService } from './api.service';
import { environment } from 'src/environments/environment';
import { HttpHeaders } from '@angular/common/http';

fdescribe('ApiService', () => {
  let service: ApiService;
  let injector: TestBed;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiService],
      imports: [HttpClientTestingModule],
    });
  });

  beforeEach(() => {
    injector = getTestBed();
    service = TestBed.get(ApiService);
    httpMock = injector.get(HttpTestingController);
  });

  afterAll(() => {
    injector;
    service;
    httpMock;
  });
  it('Should be created', () => {
    expect(service).toBeTruthy();
  });

  fdescribe('GET', () => {
    it('Should execute GET', () => {
      const result = 'testing';
      service.get().subscribe((response) => {
        expect(response).toBe(result);
      });

      const req = httpMock.expectOne(environment.apiEndpoint);
      expect(req.request.method).toBe('GET');
      req.flush(result);
    });

    it('Should execute GET with headers', () => {
      const result = 'testing';
      const headers = new HttpHeaders().set('pepito-headers', 'emmanuel-rules');

      service.get(headers).subscribe((response) => {
        expect(response).toBe(result);
      });

      const req = httpMock.expectOne(environment.apiEndpoint);
      expect(req.request.headers.get('pepito-headers')).toBe('emmanuel-rules');
      expect(req.request.method).toBe('GET');
      req.flush(result);
    });
  });

  fdescribe('POST', () => {
    it('should execute POST', () => {
      service.post('/testing', {}).subscribe((res) => {
        expect(res).toBeTruthy();
      });

      const req = httpMock.expectOne(environment.apiEndpoint + '/testing');
      expect(req.request.method).toBe('POST');
    });
  });
  fdescribe('PUT', () => {
    it('should execute PUT', () => {
      service.put('/testing', {}).subscribe((res) => {
        expect(res).toBeTruthy();
      });

      const req = httpMock.expectOne(environment.apiEndpoint + '/testing');
      expect(req.request.method).toBe('PUT');
    });
  });

  fdescribe('DELETE', () => {
    it('should execute DELETE', () => {
      service.delete('/testing', {}).subscribe((res) => {
        expect(res).toBeTruthy();
      });

      const req = httpMock.expectOne(environment.apiEndpoint + '/testing');

      expect(req.request.method).toBe('DELETE');
    });
  });
});
