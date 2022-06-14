import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Transferencia } from './models/transferencia.models';

@Injectable({
  providedIn: 'root'
})
export class TransferenciaService {

  private url = 'http://localhost:3000/transferencias';
  private listaTransferencia: any[];

  constructor(private httpClient: HttpClient) { 
    this.listaTransferencia = [];
  }
  get transferencias(){
    return this.listaTransferencia;
  }
  todas(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }
  adicionar(transferencia: Transferencia): Observable<Transferencia>{
    
   return this.httpClient.post<Transferencia>(this.url, transferencia);

  }

}
