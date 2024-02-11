import { Injectable, OnInit } from '@angular/core';
import { serveis, panelServeis, client } from '../interfaces/formularis.interface'

@Injectable({
  providedIn: 'root'
})
export class BudgetService{
  // public totalBudgetpreu: number = 0;

  constructor() { }

  public serveis: serveis[] = [
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
      id: 'Web',
      describe: "Programació d'una Web responsive completa",
      seleccio: false,
      preu: 500
    }
  ];


  public panelServeis: panelServeis[] = [
    {
      afegir: 'pagines',
      num: 1
    },
    {
      afegir: 'idiomes',
      num: 1
    }
  ]

  public clientPpto: client = {
    nom: '',
    tel: 0,
    email: ''
    }  
  
    

  getServeis(){
    return this.serveis;
  }

  calcularPreuWeb(pagines: number, idiomes: number) {
    const preuAfegir: number = 30;
    const preuBase: number = 530;
    
    let preuWeb = preuBase;

    if (pagines > 1) {
      preuWeb += (pagines - 1) * preuAfegir;
    }
    if (idiomes > 1) {
      preuWeb += (idiomes - 1) * preuAfegir;
    }
    
    console.log(`Calcular preu web: Pàgines - ${pagines}, idiomes - ${idiomes}, Total web - ${preuWeb}`);
    
    return preuWeb;  
  }

}
