import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CursoComponent } from './componentes/curso/curso.component';
import { AsignaturaComponent } from './componentes/asignatura/asignatura.component';
import { DocenteComponent } from './componentes/docente/docente.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { InstitucionalComponent } from './componentes/institucional/institucional.component';
import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { HomeComponent } from './componentes/home/home.component';
import { NotFoundComponent } from './componentes/not-found/not-found.component';

const routes: Routes = [
  { path: 'curso', component: CursoComponent },
  { path: 'asignatura', component: AsignaturaComponent },
  { path: 'docente', component: DocenteComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'institucional', component: InstitucionalComponent },
  { path: 'alumno', component: AlumnoComponent },
  { path: 'home', component: HomeComponent },
  { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
