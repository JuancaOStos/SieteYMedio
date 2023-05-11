import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioElegirComponent } from './inicio-elegir.component';

describe('InicioElegirComponent', () => {
  let component: InicioElegirComponent;
  let fixture: ComponentFixture<InicioElegirComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InicioElegirComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioElegirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
