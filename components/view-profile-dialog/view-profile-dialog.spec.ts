import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewProfileDialog } from './view-profile-dialog';

describe('ViewProfileDialog', () => {
  let component: ViewProfileDialog;
  let fixture: ComponentFixture<ViewProfileDialog>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ViewProfileDialog]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewProfileDialog);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
