import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { pptoDemanat } from '../../interfaces/formularis.interface';
import { CommonModule, NgIf } from '@angular/common';

@Component({
  selector: 'app-list-pptos',
  standalone: true,
  imports: [
    CommonModule,
    NgIf
  ],
  templateUrl: './list-pptos.component.html',
  styleUrl: './list-pptos.component.scss'
})
export class ListPptosComponent implements OnInit{
currentSort: any;
filterText: any;
sortBudgets(arg0: string) {
throw new Error('Method not implemented.');
}

  pptosDemanats: pptoDemanat[] = [];

  searchTerm: string = '';
  orderBy: string = '';

  // Definimos variables de estado para el orden de cada tipo
  orderByDateAsc: boolean = true;
  orderByNameAsc: boolean = true;
  orderByPriceAsc: boolean = true;

  constructor ( public BudgetService: BudgetService) { }

  ngOnInit(): void {
    this.pptosDemanats = this.BudgetService.getPptosDemanats();
  }

  // Filtros de salida



  orderByDate() {
    // Alternamos el estado de orden ascendente/descendente
    this.orderByDateAsc = !this.orderByDateAsc;
    this.orderBy = 'date';
    this.pptosDemanats.sort((a, b) => {
      const dateA = new Date(a.data);
      const dateB = new Date(b.data);
      if (this.orderByDateAsc) {
        return dateA.getTime() - dateB.getTime();
      } else {
        return dateB.getTime() - dateA.getTime();
      }
    });
  }

  orderByName() {
    this.orderByNameAsc = !this.orderByNameAsc;
    this.orderBy = 'name';
    this.pptosDemanats.sort((a, b) => {
      if (this.orderByNameAsc) {
        return a.nom.localeCompare(b.nom);
      } else {
        return b.nom.localeCompare(a.nom);
      }
    });
  }

  orderByPrice() {
    this.orderByPriceAsc = !this.orderByPriceAsc;
    this.orderBy = 'price';
    this.pptosDemanats.sort((a, b) => {
      if (this.orderByPriceAsc) {
        return a.totPpto - b.totPpto;
      } else {
        return b.totPpto - a.totPpto;
      }
    });
  }















}
