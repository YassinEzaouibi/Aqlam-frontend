import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupervisorsUpdateComponent } from './supervisors-update.component';

describe('SupervisorsUpdateComponent', () => {
  let component: SupervisorsUpdateComponent;
  let fixture: ComponentFixture<SupervisorsUpdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupervisorsUpdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupervisorsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
