import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario.component';
import { FormsModule } from '@angular/forms';
import { LibrosComponent } from './Libros/libros.component';
import { LibroComponent } from './Libro/libro.component';
import { LibrosService } from './Services/libros.service';
import { InicioComponent } from './inicio.component';
import { RegistrarComponent } from './seguridad/registrar/registrar.component';
import { LoginComponent } from './seguridad/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    LibrosComponent,
    LibroComponent,
    InicioComponent,
    RegistrarComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [LibrosService],
  bootstrap: [AppComponent],
})
export class AppModule {}
