import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NaturaldietComponent } from './naturaldiet.component';

describe('NaturaldietComponent', () => {
  let component: NaturaldietComponent;
  let fixture: ComponentFixture<NaturaldietComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NaturaldietComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NaturaldietComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
