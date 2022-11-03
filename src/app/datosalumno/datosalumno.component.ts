import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datosalumno',
  templateUrl: './datosalumno.component.html',
  styleUrls: ['./datosalumno.component.css']
})
export class DatosalumnoComponent implements OnInit {

  nombre:string="Jorge";
  apellidos:string="Fernandez";
  poblacion:string="Terrassa";

  constructor() { }

  ngOnInit(): void {
  }

}
