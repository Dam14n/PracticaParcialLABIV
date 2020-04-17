import { Producto } from './../../clases/producto';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mostrar-producto',
  templateUrl: './mostrar-producto.component.html',
  styleUrls: ['./mostrar-producto.component.css']
})
export class MostrarProductoComponent implements OnInit {
  @Input() producto: Producto;

  constructor() { }

  ngOnInit(): void {
  }

}
