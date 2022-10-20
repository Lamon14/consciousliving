import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrequencymedicineComponent } from './frequencymedicine.component';

describe('FrequencymedicineComponent', () => {
  let component: FrequencymedicineComponent;
  let fixture: ComponentFixture<FrequencymedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrequencymedicineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrequencymedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
