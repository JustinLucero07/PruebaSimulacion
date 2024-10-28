import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OperacionesComponentService {

  constructor() { }

  operaciones: any = []

  agregar(num1:number, op:string ,num2:number,res:number){
    this.operaciones.push({num1,op,num2,res})
    localStorage.setItem('operaciones', JSON.stringify(this.operaciones))
  }

  eliminar(operaciones:any){
    const index = this.operaciones.indexOf(operaciones)
    if(index>-1){
      this.operaciones.splice(index,1)
    }
    localStorage.setItem('operaciones',JSON.stringify(this.operaciones))
  }

  obtenertareas(){
    return this.operaciones
  }
}
