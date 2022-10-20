import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalspiritualComponent } from './personalspiritual.component';

describe('PersonalspiritualComponent', () => {
  let component: PersonalspiritualComponent;
  let fixture: ComponentFixture<PersonalspiritualComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalspiritualComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalspiritualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
