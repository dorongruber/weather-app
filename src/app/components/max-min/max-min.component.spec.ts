import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxMinComponent } from './max-min.component';

describe('MaxMinComponent', () => {
  let component: MaxMinComponent;
  let fixture: ComponentFixture<MaxMinComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MaxMinComponent]
    });
    fixture = TestBed.createComponent(MaxMinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
