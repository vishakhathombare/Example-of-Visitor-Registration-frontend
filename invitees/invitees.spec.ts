import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Invitees } from './invitees';

describe('Invitees', () => {
  let component: Invitees;
  let fixture: ComponentFixture<Invitees>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Invitees]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Invitees);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
