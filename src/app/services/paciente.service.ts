import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_API } from 'src/config';

@Injectable({
  providedIn: 'root'
})
export class PacienteService {
  url = URL_API;
  Paciente ;
  constructor(private http: HttpClient) {

  }
  getP(cc) {
    return this.http.get(this.url + 'paciente', cc);
  }

  getAP() {
    return this.http.get( this.url + 'paciente');
  }

  registroP(body) {
    return this.http.post(this.url + 'paciente', body);
  }

  eliminarP(cc) {
    return this.http.delete(this.url + 'paciente', cc);
  }

  actualizarP(body) {
    return this.http.put(this.url, 'paciente', body);
  }
}
