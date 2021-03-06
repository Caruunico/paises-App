import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient) { }//Importo el HTTPCLIENTMODULE en app.module y lo inyect en el servicio
  
  
  
  buscarPais(termino:string): Observable<Country[]>{// observable que emite un observable de tipo Country arreglo

    const url = `${this.apiUrl}/name/${termino}`;

    return this.http.get<Country[]>(url);
  }

  buscarCapital(termino:string): Observable<Country[]>{

    const url = `${this.apiUrl}/capital/${termino}`;

    return this.http.get<Country[]>(url);
  }
  
  getPaisPorCodigo(id:string): Observable<Country>{

    const url = `${this.apiUrl}/alpha/${id}`;

    return this.http.get<Country>(url);
  }

  buscarRegion(region:string): Observable<Country[]>{

    const url = `${this.apiUrl}/region/${region}`;

    return this.http.get<Country[]>(url);
  }
}



