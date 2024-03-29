import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl, ValidationErrors } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';
import { PanelComponent } from '../panel/panel.component';
import { JsonPipe, NgIf } from '@angular/common';
import { serveis, panelServeis, client } from '../../interfaces/formularis.interface';
import { ListPptosComponent } from '../list-pptos/list-pptos.component';
import { PersonalValidacions } from '../validacions/personal-validacions';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PanelComponent,
    ListPptosComponent,
    NgIf,
    JsonPipe
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {


  public serveis = this.BudgetService.getServeis();
  pptoForm: FormGroup;
  nomErrors: boolean = false;
  telErrors: boolean = false;
  emailErrors: boolean = false;
  totPptoErrors: boolean = false;


  constructor(
    private fb: FormBuilder,
    private BudgetService: BudgetService
  ) {
    // Inicializar el formulario
    this.pptoForm = this.fb.group({
      seo: false,
      ads: false,
      web: false,
      numPagines: new FormControl(1),
      numIdiomes: new FormControl(1),
      totPpto: [0, [Validators.required, PersonalValidacions.totalValido]],
      nom: ['', [Validators.required, PersonalValidacions.nombreValido]],
      tel: ['', [Validators.required, PersonalValidacions.telefonoValido]],
      email: ['', [Validators.required, PersonalValidacions.emailValido]],
    });






  }

  // Calcular total del ppto
  calcularTotalPpto() {
    let totPpto: number = 0;

    if (this.pptoForm.get('seo')!.value) {
      totPpto += 300;
    }
    if (this.pptoForm.get('ads')!.value) {
      totPpto += 400;
    }
    if (this.pptoForm.get('web')!.value) {
      totPpto += this.BudgetService.calcularPreuWeb(
        this.pptoForm.get('numPagines')!.value,
        this.pptoForm.get('numIdiomes')!.value
      );
    }
    this.pptoForm.get('totPpto')!.setValue(totPpto);
  }



  onPaginesCanvi(nouPagines: number) {
    this.pptoForm.get('numPagines')!.setValue(nouPagines);
    this.calcularTotalPpto();
  }

  onIdiomesCanvi(nouIdiomes: number) {
    this.pptoForm.get('numIdiomes')!.setValue(nouIdiomes);
    this.calcularTotalPpto();
  }

  demanarPpto(event: Event) {
    const nouPressupost = this.pptoForm.getRawValue();
      console.log("Ptpo capturado: ", nouPressupost);
      this.BudgetService.guardarPpto(nouPressupost);
      this.pptoForm.reset();
      this.pptoForm.get('totPpto')?.reset(0);
      this.pptoForm.get('numPagines')?.reset(1);
      this.pptoForm.get('numIdiomes')?.reset(1);
  }


}





