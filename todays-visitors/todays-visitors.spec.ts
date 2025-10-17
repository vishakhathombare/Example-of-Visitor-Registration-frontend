import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TodaysVisitors } from './todays-visitors';

describe('TodaysVisitors', () => {
  let component: TodaysVisitors;
  let fixture: ComponentFixture<TodaysVisitors>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TodaysVisitors]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TodaysVisitors);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
