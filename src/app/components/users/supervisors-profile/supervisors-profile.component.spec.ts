import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorsProfileComponent } from './supervisors-profile.component';

describe('SupervisorsProfileComponent', () => {
  let component: SupervisorsProfileComponent;
  let fixture: ComponentFixture<SupervisorsProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorsProfileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorsProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
