import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  // Configuración inicial antes de ejecutar los tests
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HomeComponent,
        ReactiveFormsModule,
        BudgetService
      ]

    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeComponent); // Creamos una instancia del componente
    component = fixture.componentInstance; // Accedemos a la instancia del componente
    fixture.detectChanges(); // Detectamos cambios en el componente
  });


  // Si el componente se ha creado corractamente, debería existir
  it('should create', () => {
    expect(component).toBeTruthy();
  });


  //Compruebo que los controles del formulario se actualicen correctamente
  it('should initialize form controls', () => {
    expect(component.serveisForm.get('Seo)')).toBeTruthy();
    expect(component.serveisForm.get('Ads)')).toBeTruthy();
    expect(component.serveisForm.get('web)')).toBeTruthy();
  });

  // Compruebo que el total se actualiza correctamente al cambiar los controles del formulario
  it('should update total when form controls change', () => {
    const seoControl = component.serveisForm.get('Seo') as FormControl;
    //Simulo un cambio en el control del formulario
    seoControl.setValue(false);
    // Compruebo que el total se haya actualizado
    expect(component.total).toEqual(0);
  });

  // Compruebo que totalWeb se actualiza correctamente al llamar a calcularTotalWeb
  it('should update totalWeb when calculateTotalWeb is called', () => {
    // Llamo a la función para actualizar totalWeb
    component.calcularTotalWeb(50);
    // Verifico que totalWeb se actualiza correctamente
    expect(component.calcularTotalWeb).toEqual(50);
  });

});
