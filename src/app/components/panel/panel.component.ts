import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';
import { BudgetService } from '../../services/budget.service';
import { ModalComponent } from '../modal/modal.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    ModalComponent,
    CommonModule
  ],
  templateUrl: './panel.component.html',
  styleUrl: './panel.component.scss'
})

export class PanelComponent implements OnInit{
  paginesPreu: number = 1;
  idiomesPreu: number = 1;
  totalWeb: number = 30;

  constructor( public BudgetService: BudgetService){}

  ngOnInit(): void {
    this.panelForm.setValue({
      numPagines: '1',
      numIdiomes: '1'
    });

  }


  public panelForm = new FormGroup({
    numPagines: new FormControl('1', [Validators.required, Validators.min(1)]),
    numIdiomes: new FormControl('1', [Validators.required, Validators.min(1)]),
  });

  @Output()
  sendTotalWeb : EventEmitter<number> = new EventEmitter();



  // cambiar número página e idiomas


/*   counter(id: string){
    if (id == 'page-') {
      if (this.paginesPreu <= 0) return;
      this.paginesPreu--;
      this.BudgetService.panelServeis[0].num = this.paginesPreu;
    } else if (id == 'page+'){
      this.paginesPreu++;
      this.BudgetService.panelServeis[0].num = this.paginesPreu;
    } else if (id == 'language-'){
      if (this.idiomesPreu <= 0) return;
      this.idiomesPreu--;
      this.BudgetService.panelServeis[1].num = this.idiomesPreu;
    } else if (id == 'language+'){
      this.idiomesPreu++;
      this.BudgetService.panelServeis[1].num = this.idiomesPreu;
    }
  } */

  canviarPagines(canvi: number) {
    if (this.idiomesPreu !== undefined) {
      this.paginesPreu = Math.max(1, this.paginesPreu + canvi);
    }
  }

  canviarIdiomes(canvi: number) {
    if (this.idiomesPreu !== undefined) {
    this.idiomesPreu = Math.max(1, this.idiomesPreu + canvi);
    }
  }


  // -------------------------------

  emitTotalWeb(): void{
    this.totalWeb = this.paginesPreu * this.idiomesPreu *30;
    this.sendTotalWeb.emit(this.totalWeb);
  }

}


