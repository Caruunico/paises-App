import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { Country } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styles: [
  ]
})
export class PorPaisComponent  {

  termino: string = "";//lo que se busca
  hayError: boolean = false;//verifica si se encuentra o no el pais de busqueda
  paises : Country[] = [];
  constructor( private paisService: PaisService) { }


  

  buscar( termino: string){
    
    this.hayError = false;//eno hay error, no se muestra el cartel
    this.termino = termino;//ouput

    this.paisService.buscarPais(this.termino)//llamo a la peticion Http del servicio
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

  sugerencias(termino:string){
    this.hayError = false;
    //TODO: crear sugerencias
  }
}
