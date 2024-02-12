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

  pptosDemanats: pptoDemanat[] = [];

  searchTerm: string = '';
  orderBy: string = '';

  // Definimos variables de estado para el orden de cada tipo
  orderByDateAsc: boolean = true;
  orderByNameAsc: boolean = true;
  orderByPriceAsc: boolean = true;

  constructor ( public BudgetService: BudgetService) { }

  ngOnInit() {
    // Me suscribo al observable del servicio para recoger los cambios del array
    this.BudgetService.pptosDemanats$.subscribe(pptos => {
      this.pptosDemanats = pptos;
    });
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
        const nameA = a.nom ? a.nom.toLowerCase() : ''; // Verificar si a.nom está definido
        const nameB = b.nom ? b.nom.toLowerCase() : ''; // Verificar si b.nom está definido

        if (this.orderByNameAsc) {
            return nameA.localeCompare(nameB);
        } else {
            return nameB.localeCompare(nameA);
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
