import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Producto } from './../../clases/producto';

@Component({
  selector: 'app-boton-borrar',
  templateUrl: './boton-borrar.component.html',
  styleUrls: ['./boton-borrar.component.css']
})
export class BotonBorrarComponent implements OnInit {
  @Output() onBorrarProducto: EventEmitter<Producto> = new EventEmitter<Producto>();
  @Input() producto: Producto;

  constructor() { }

  ngOnInit(): void {
  }

  borrarProducto(){
    this.onBorrarProducto.emit(this.producto);
  }

}
