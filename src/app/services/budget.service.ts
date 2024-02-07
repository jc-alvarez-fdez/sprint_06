import { Injectable, OnInit } from '@angular/core';
import { Serveis, panelServeis } from '../interfaces/formularis.interface'

@Injectable({
  providedIn: 'root'
})
export class BudgetService{
  // public totalBudgetpreu: number = 0;

  constructor() { }

  public Serveis: Serveis[] = [
    {
      id: 'Seo',
      describe: "Estratègia SEO personalitzada",
      seleccio: false,
      preu: 300
    },
    {
      id: 'Ads',
      describe: "Gestió de campanya Ads y i de xarxes socials",
      seleccio: false,
      preu: 400
    },
    {
      id: 'web',
      describe: "Programació d'una web responsive completa",
      seleccio: false,
      preu: 500
    }
  ];


  public panelServeis: panelServeis[] = [
    {
      id: 'pagines',
      num: 1
    },
    {
      id: 'idiomes',
      num: 1
    }
  ]

  getServeis(){
    return this.Serveis;
  }

}
