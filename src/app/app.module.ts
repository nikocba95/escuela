import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { CursoComponent } from './componentes/curso/curso.component';
import { AsignaturaComponent } from './componentes/asignatura/asignatura.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { DocenteComponent } from './componentes/docente/docente.component';
import { InstitucionalComponent } from './componentes/institucional/institucional.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { HomeComponent } from './componentes/home/home.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CursoComponent,
    AsignaturaComponent,
    AlumnoComponent,
    DocenteComponent,
    InstitucionalComponent,
    ContactoComponent,
    HomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
