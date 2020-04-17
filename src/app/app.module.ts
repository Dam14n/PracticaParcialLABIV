import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BotonBorrarComponent } from './componentes/boton-borrar/boton-borrar.component';
import { BusquedaComponent } from './componentes/busqueda/busqueda.component';
import { ListadoProductosComponent } from './componentes/listado-productos/listado-productos.component';
import { MostrarProductoComponent } from './componentes/mostrar-producto/mostrar-producto.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListadoProductosComponent,
    BotonBorrarComponent,
    BusquedaComponent,
    MostrarProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
