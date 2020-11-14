'use strict'
/* Modelo del objeto Leader de la BD */
export class Leader{
    constructor(
        public _id: string,
        public name: string,
        public surname: string,
        public phoneNumber: number,
        public address: string,
        public email: string,
        public birthday: string,
        public image: string
    ){}
}
