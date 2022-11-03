import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DatosalumnoComponent } from './datosalumno/datosalumno.component';

const routes: Routes = [

  {
    path:'datosalumno',
    component:DatosalumnoComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
