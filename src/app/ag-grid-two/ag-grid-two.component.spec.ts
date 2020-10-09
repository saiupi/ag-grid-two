import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgGridTwoComponent } from './ag-grid-two.component';

describe('AgGridTwoComponent', () => {
  let component: AgGridTwoComponent;
  let fixture: ComponentFixture<AgGridTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgGridTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgGridTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
