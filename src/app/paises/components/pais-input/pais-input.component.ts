import { Component, Output, EventEmitter, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';


@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styles: [
  ]
})
export class PaisInputComponent implements OnInit {

  @Output() onEnter: EventEmitter<string> = new EventEmitter();//creo un Outpu llamado onEnter que va a emitir el termino tipo String
  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  
  @Input() placeholder: string = '';

  termino: string = "";
  
  debouncer : Subject<string> = new Subject();

  ngOnInit(){
    this.debouncer
    .pipe(debounceTime(300))//cuantas milesimas de segund quiero esperar antes de emitir el proximo valor
    .subscribe(valor =>{
      this.onDebounce.emit(valor);
    });
  }

  buscar(){
    this.onEnter.emit(this.termino);//sentencia para emitir el termino ya con el output declarado
  }

  teclaPresionada(){
    this.debouncer.next(this.termino);

  };
}
