import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent  {

  termino: string = "";//lo que se busca
  hayError: boolean = false;//verifica si se encuentra o no el pais de busqueda
  paises : Country[] = [];


  constructor( private paisService: PaisService) { }

 
  buscar( termino: string){
    
    this.hayError = false;//eno hay error, no se muestra el cartel
    this.termino = termino;//ouput

    this.paisService.buscarCapital(this.termino)//llamo a la peticion Http del servicio
    .subscribe( 

    (paises) => {
    this.paises = paises;//para cada pais, sumarl al arreglo vacio paises
    console.log(paises);
    
    },

    (err) => {// parametro del suscribe (dejar flecha sobre el suscribe ara ver mas)
      this.hayError = true;//si no se encuentra el pais, muestra el cartel
      this.paises = [];
    console.log('Error'); 
    
    }

    );
    
    
  }
}
