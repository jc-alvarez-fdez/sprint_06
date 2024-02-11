import { Component, OnInit } from '@angular/core';
import { BudgetService } from '../../services/budget.service';
import { pptoDemanat } from '../../interfaces/formularis.interface';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-list-pptos',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './list-pptos.component.html',
  styleUrl: './list-pptos.component.scss'
})
export class ListPptosComponent implements OnInit{

  pptosDemanats: pptoDemanat[] = [];

  constructor ( public BudgetService: BudgetService) { }

  ngOnInit(): void {
    this.pptosDemanats = this.BudgetService.getPptosDemanats();
  }
}
