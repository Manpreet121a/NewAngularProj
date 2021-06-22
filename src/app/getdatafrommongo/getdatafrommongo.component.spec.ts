import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetdatafrommongoComponent } from './getdatafrommongo.component';

describe('GetdatafrommongoComponent', () => {
  let component: GetdatafrommongoComponent;
  let fixture: ComponentFixture<GetdatafrommongoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetdatafrommongoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetdatafrommongoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
