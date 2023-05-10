import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioJugarComponent } from './inicio-jugar.component';

describe('InicioJugarComponent', () => {
  let component: InicioJugarComponent;
  let fixture: ComponentFixture<InicioJugarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioJugarComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioJugarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
