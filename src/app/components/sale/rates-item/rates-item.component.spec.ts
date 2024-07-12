import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatesItemComponent } from './rates-item.component';

describe('RatesItemComponent', () => {
  let component: RatesItemComponent;
  let fixture: ComponentFixture<RatesItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatesItemComponent]
    });
    fixture = TestBed.createComponent(RatesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
