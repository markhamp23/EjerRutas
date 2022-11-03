import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatosalumnoComponent } from './datosalumno.component';

describe('DatosalumnoComponent', () => {
  let component: DatosalumnoComponent;
  let fixture: ComponentFixture<DatosalumnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatosalumnoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatosalumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
