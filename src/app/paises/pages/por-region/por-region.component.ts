import { Component } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
          button{
            margin-right: 5px;
          }
          `
  ]
})
export class PorRegionComponent  {

  regiones: string[]= ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string='';
  paises: Country[]=[];

  constructor(private regionService: PaisService) { }

  getClassCSS(region:string){
    //si region es igual a regionActiva, devuelve btn-primary, si no, btn-outline-primary
    return ( region===this.regionActiva) ? 'btn btn-primary' : 'btn btn-outline-primary';
  }

  activarRegion( region: string){

    if(region === this.regionActiva) {return}

    this.regionActiva = region;
    this.paises= [];

    this.regionService.buscarRegion(this.regionActiva)
    .subscribe(
      (paises) => {
        this.paises = paises;//para cada pais, sumarle al arreglo vacio paises
        console.log(paises);
        
        },
    )
  }




}
