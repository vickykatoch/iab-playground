import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IabServicesComponent } from './iab-services.component';

describe('IabServicesComponent', () => {
  let component: IabServicesComponent;
  let fixture: ComponentFixture<IabServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IabServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IabServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
