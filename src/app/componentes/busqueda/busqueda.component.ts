import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  @Output() buscarPorId: EventEmitter<any> = new EventEmitter<any>();
  idBuscado: string;

  constructor() { }

  ngOnInit(): void {
  }

  buscarIdProducto(){
    this.buscarPorId.emit(this.idBuscado);
  }

}
