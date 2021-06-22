import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdatacomponentComponent } from './getdatacomponent.component';

describe('GetdatacomponentComponent', () => {
  let component: GetdatacomponentComponent;
  let fixture: ComponentFixture<GetdatacomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdatacomponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdatacomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
