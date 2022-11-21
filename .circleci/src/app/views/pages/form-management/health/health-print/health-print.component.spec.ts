import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { HealthPrintComponent } from './health-print.component';

describe('HealthPrintComponent', () => {
  let component: HealthPrintComponent;
  let fixture: ComponentFixture<HealthPrintComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthPrintComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthPrintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
