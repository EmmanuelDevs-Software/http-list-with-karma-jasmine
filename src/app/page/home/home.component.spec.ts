import { ComponentFixture, getTestBed, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { HomeComponent } from './home.component';
import { ApiService } from '../../services/api.service';
import { mockData } from '../../services/mockApi';
import { of, Subject } from 'rxjs';

class ApiServiceStub {
  observer = new Subject();
  get() {
    return of(true);
  }
}

fdescribe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;
  let service: ApiService;
  let injector: TestBed;
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [{ provide: ApiService, useClass: ApiServiceStub }],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    injector = getTestBed();
    service = TestBed.get(ApiService);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have the text Lista de llamadas Http!', () => {
    const title = fixture.debugElement.query(By.css('h1'));
    expect(title.nativeElement.innerHTML).toBe('Lista de llamadas Http');
  });

  it('should render img', () => {
    const fixture = TestBed.createComponent(HomeComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('img')).toBeTruthy();
  });
});
