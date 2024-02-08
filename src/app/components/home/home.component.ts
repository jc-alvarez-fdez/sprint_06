import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';
import { PanelComponent } from '../panel/panel.component';
import { NgIf } from '@angular/common';
import { Serveis } from '../../interfaces/formularis.interface';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    PanelComponent,
    NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  public total: number = 0;
  public totalWeb: number = 0;
  public serveis = this.BudgetService.getServeis();


  mostrarPanel(){
    return (this.BudgetService.Serveis[2].seleccio) ? true : false;
  }

  constructor(public BudgetService: BudgetService){}
  ngOnChanges(changes: SimpleChanges): void {
    throw new Error('Method not implemented.');
  }

  ngOnInit(): void {
    this.serveisForm;
    this.iniciarForm();
  }

  public serveisForm = new FormGroup ({
    Seo: new FormControl(false),
    Ads: new FormControl(false),
    Web: new FormControl(false),
  });

  iniciarForm(){
    this.BudgetService.Serveis.forEach( (object, index) => {
      this.serveisForm.get(object.id)?.valueChanges.subscribe(
        seleccioActual => {
          object.seleccio = seleccioActual;
          if (seleccioActual == true){
            this.total += object.preu;
            if (object.id == 'Web') this.totalWeb = 30;
          } else {
            if (object.id == 'Web') this.totalWeb = 0;
            this.total -= object.preu;
          }
        })
      }
  )
  }

  calcularTotalWeb(preu: number): void{
    this.totalWeb = preu;
  }


}
