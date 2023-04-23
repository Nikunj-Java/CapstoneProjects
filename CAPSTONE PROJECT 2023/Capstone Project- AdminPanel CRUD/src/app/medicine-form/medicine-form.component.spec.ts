import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineFormComponent } from './medicine-form.component';

describe('MedicineFormComponent', () => {
  let component: MedicineFormComponent;
  let fixture: ComponentFixture<MedicineFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
