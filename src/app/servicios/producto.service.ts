import { Injectable } from '@angular/core';
import { Producto } from '../clases/producto';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  constructor() { }

  obtenerProductos(): Array<Producto> {
    return [
      new Producto(1, `Una descripcion.`, 'Liquido', '2020-01-01', 100, 'https://material.angular.io/assets/img/examples/shiba2.jpg'),
      new Producto(2, `Otra Descripcion.`, 'Liquido', '2020-01-01', 100, 'https://material.angular.io/assets/img/examples/shiba2.jpg')];
  }

}
