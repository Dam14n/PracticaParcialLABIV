import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Producto } from './clases/producto';
import { ProductoService } from './servicios/producto.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  listadoProductos: Array<Producto>;
  productoEncontrado: Producto;

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
    this.listadoProductos = this.productoService.obtenerProductos();
  }

  buscarPorId(unId: string) {
    console.info(unId);
    this.productoEncontrado = this.listadoProductos.find(unProducto => unProducto.id === unId);
  }
}
