import { Interface } from "node:readline"

export interface serveis {
  id: string,
  describe: string,
  seleccio: boolean | null,
  preu: number
}

export interface panelServeis {
  afegir: string,
  num: number
}

export interface client {
  nom: string,
  tel: number,
  email: string
}
