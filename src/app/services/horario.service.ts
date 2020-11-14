'use strict'
/* Importar todos lo módulos necesarios */
import{ Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

/* Importar el modelo */
import { Horario } from '../models/horario';
import { global } from './global';

@Injectable()
export class HorarioService{
    public url:string;

    constructor(
        private _http: HttpClient
    ){
        this.url = global.url;
    }

    /* Método que guarda un nuevo lider en la BD
    Parámetro: un objeto de tipo Leader
    Devuelve un Observable de cualquier tipo */
    saveHorario(horario: Horario): Observable<any>{
        /* Variable 'params' para almacenar en un JSON los parámetros que se quieren guardar */
        let params = JSON.stringify(horario);
        /* Variable para establecer las cabeceras, cómo se va a enviar la información */
        let headers = new HttpHeaders().set('Content-Type','application/json');

        /* Petición por POST para dar de alta o crear un nuevo elemento en la BD
        La URL del API (global) + la ruta del método del API a usar + params: los datos a guardar en la BD
        + un objeto con una propiedad llamada 'headers' y con los valores de la variable headers */
        return this._http.post(this.url+'/save-horario', params, {headers: headers});
    }

    /* Método que saca la información de los usuarios almacenados en la BD
      en un objeto JSON
    */
   getHorarios(): Observable<any>{
     /* Variable para establecer las cabeceras, cómo se va a enviar la información */
     let headers = new HttpHeaders().set('Content-Type', 'aplication/json');

     /* Petición por GET para obtener los elementos almacenados en la BD
      La URL del API (global) + la ruta del método del API a usar + un objeto
      con una propiedad llamada 'headers' y con los valores de la variable headers */
     return this._http.get(this.url+'horarios', {headers: headers});
   }

   /* Método que saca la información de un úinico usuario almacenado en la BD
      en un objeto JSON
    */
    getHorario(id): Observable<any>{
      /* Variable para establecer las cabeceras, cómo se va a enviar la información */
      let headers = new HttpHeaders().set('Content-Type', 'aplication/json');

      return this._http.get(this.url+'horario/'+id, {headers: headers});
    }

    /*
      Método que elimina la información de un úinico usuario almacenado en la BD
    */
   deleteHorario(id): Observable<any>{
    /* Variable para establecer las cabeceras, cómo se va a enviar la información */
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');

    return this._http.delete(this.url+'horario/'+id, {headers: headers});
  }

  /*
      Método que actualiza la información de un úinico usuario almacenado en la BD
    */
   updateHorario(horario: Horario): Observable<any>{
     /* Variable 'params' para almacenar en un JSON los parámetros que se quieren guardar */
     let params = JSON.stringify(horario);

    /* Variable para establecer las cabeceras, cómo se va a enviar la información */
    let headers = new HttpHeaders().set('Content-Type', 'aplication/json');

    return this._http.put(this.url+'horario/'+horario._id, params, {headers: headers});
  }
}
