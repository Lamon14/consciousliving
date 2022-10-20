import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DietarysupplementsComponent } from './dietarysupplements.component';

describe('DietarysupplementsComponent', () => {
  let component: DietarysupplementsComponent;
  let fixture: ComponentFixture<DietarysupplementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DietarysupplementsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DietarysupplementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
