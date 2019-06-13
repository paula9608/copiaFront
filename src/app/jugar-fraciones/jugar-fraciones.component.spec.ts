import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JugarFracionesComponent } from './jugar-fraciones.component';

describe('JugarFracionesComponent', () => {
  let component: JugarFracionesComponent;
  let fixture: ComponentFixture<JugarFracionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JugarFracionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JugarFracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
