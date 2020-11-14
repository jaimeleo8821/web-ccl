'use strict'
/* Modelo del objeto Leader de la BD */
export class Horario{
    constructor(
        public _id: string,
        public infoMiercoles: string,
        public infoViernes: string,
        public infoSabado: string,
        public infoDomingo: string,
    ){}
}
