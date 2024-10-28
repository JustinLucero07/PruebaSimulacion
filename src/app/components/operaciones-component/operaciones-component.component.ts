import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { OperacionesComponentService } from '../../services/operaciones-component.service';

@Component({
  selector: 'app-operaciones-component',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './operaciones-component.component.html',
  styleUrl: './operaciones-component.component.scss'
})
export class OperacionesComponentComponent implements OnInit{

  num1 = 0
  op = ''
  num2 = 0
  res = 0

  operaciones: any =[]
  ngOnInit(): void {
    this.cargarOperaciones()
  }

  constructor(private operacionS: OperacionesComponentService){

  }

  calcular(){
    if(this.op = '+'){
      this.res = this.num1 + this.num2
    }else if(this.op = '-'){
      this.res = this.num1 - this.num2
    }else if(this.op = '*'){
      this.res = this.num1 * this.num2
    }else if(this.op = '/'){
      this.res = this.num1 / this.num2
    }
    
    this.operacionS.agregar(this.num1,this.op,this.num2,this.res)
    
  }

  eliminar(operacion:any){
    this.operacionS.eliminar(operacion)
  }

  cargarOperaciones(){
    this.operaciones = this.operacionS.obtenertareas() 
  }
}
