import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartegyComponent } from './startegy.component';

describe('StartegyComponent', () => {
  let component: StartegyComponent;
  let fixture: ComponentFixture<StartegyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartegyComponent]
    });
    fixture = TestBed.createComponent(StartegyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
