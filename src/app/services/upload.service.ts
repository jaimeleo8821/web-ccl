'use strict'
import { Injectable } from '@angular/core';
import { global } from './global';

@Injectable()


export class UploadService{
  /* url --> variable para definir la URL del API */
  public url:string;

  constructor(){
    this.url = global.url;
  }
  /* makeFileRequest() --> método para hacer una petición AJAX adjuntando un archivo para subir
    parámetros de la función:
    url --> la URL a al cual se le hace la petición AJAx
    params --> un Array de posibles parámetros que va a estar enviando
    files --> un Array de archivos
    name --> nombre del achivo o parámetro que va a recibir el BackEnd */
  makeFileRequest(url: string, params: Array<string>, files: Array<File>, name: string){

    /* Promesa para la petición AJAX
      resolve --> la promesa se ha resuelto
      reject --> la promesa no se ha resuelto, hay un problema */
    return new Promise(function(resolve, reject){
      // formData --> simula un formulario clásico en un objeto
      var formData:any = new FormData();
      // xhr --> un sinónimo de AJAX que contiene un objeto XMLHttpRequest de peticiones asíncronas de JS
      var xhr = new XMLHttpRequest();

      /* for para recorrer el Array de archivos que puede estar llegando por la petición AJAX
        todos los archivos que lleguen se adjuntan al formulario, con el nombre por parámetro,
        añade el archivo y recoge su nombre */
      for(var i = 0; i < files.length; i++){
        formData.append(name, files[i], files[i].name);
      }

      /* Petición AJAX */
      xhr.onreadystatechange = function(){
        // comprueba si la petición AJAX devuelve readyState es igual a 4 (valor por defecto que funciona)
        if(xhr.readyState == 4){
          // comprueba si la petición AJAX devuelve status 200 (valor por defecto que funciona)
          if(xhr.status == 200){
            // si llega resolve, se hace un parseado JSON de la respuesta
            resolve(JSON.parse(xhr.response));
          }else{
            // si no sucede, se hace el reject y se pasa como parámetro la response
            reject(xhr.response);
          }
        }
      }
      // Petición AJAX por el método POST a la URL que le indico con 'true' para que haga la petición
      xhr.open('POST', url, true);
      // envía el formulario con los archivos
      xhr.send(formData);
    });
  }
}
