import { ProductoService } from './servicios/producto.service';
import { Producto } from './clases/producto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  listadoProductos: Array<Producto>;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.listadoProductos = this.productoService.obtenerProductos();
  }
}
