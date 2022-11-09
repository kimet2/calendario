import { Component } from '@angular/core';

interface Calendar{
  meses: string;
  diassemana:String[];
  numdias: number[];
  festivos: String[];
  fiesta_n : number;
  fiesta_r : number;
  fiesta_l : number;
  fiesta_c : number;

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practica5';
  festivos=["Festiu Nacional","Festiu Regional","Festiu Local","Festiu Centre"];
  mesos: Calendar[]=[];
  primermes: String;
  segundomes: String;
  semanaprimermes: String[];
  semanasegundomes: String[];
  diasprimermes: Number[];
  diassegundomes: Number[];
  septembrefiestan : number;
  septembrefiestar : number;
  septembrefiestal : number;
  septembrefiestanc : number;
  octubrefiestan : number;
  octubrefiestal : number;
  octubrefiestar : number;
  octubrefiestanc : number;


  constructor(){
    const serverJson = `[
    {"meses":"Septiembre", 
    "diassemana":["L","M","X","J","V","S","D"], 
    "numdias" : ["","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30],
    "fiesta_n" : ".",
    "fiesta_r" : 11,
    "fiesta_l" : 29,
    "fiesta_c" : "."},
    {"meses": "Octubre",
    "diassemana":["L","M","X","J","V","S","D"],
    "numdias" : ["","","","","",1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
    "fiesta_n" : 12,
    "fiesta_r" : ".",
    "fiesta_l" : ".",
    "fiesta_c" : 31
}
    ]`;
     // Parseamos la información y la convertimos directamente en un array de "Character"
     this.mesos = JSON.parse(serverJson);

     this.primermes = this.mesos[0].meses;
     this.segundomes = this.mesos[1].meses;
     this.semanaprimermes = this.mesos[0].diassemana;
     this.semanasegundomes = this.mesos[1].diassemana;
     this.diasprimermes = this.mesos[0].numdias;
     this.diassegundomes = this.mesos[1].numdias;
      this.septembrefiestan = this.mesos[0].fiesta_n;
      this.septembrefiestar = this.mesos[0].fiesta_r;
      this.septembrefiestal = this.mesos[0].fiesta_l;
      this.septembrefiestanc = this.mesos[0].fiesta_c;
      this.octubrefiestan = this.mesos[1].fiesta_n;
      this.octubrefiestar = this.mesos[1].fiesta_r;
      this.octubrefiestal = this.mesos[1].fiesta_l;
      this.octubrefiestanc = this.mesos[1].fiesta_c;

  }
 
} 

