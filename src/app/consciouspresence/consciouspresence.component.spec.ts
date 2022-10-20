import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsciouspresenceComponent } from './consciouspresence.component';

describe('ConsciouspresenceComponent', () => {
  let component: ConsciouspresenceComponent;
  let fixture: ComponentFixture<ConsciouspresenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsciouspresenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsciouspresenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
