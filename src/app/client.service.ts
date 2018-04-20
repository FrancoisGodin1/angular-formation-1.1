import { Injectable } from '@angular/core';
import { Client } from './shared/client';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class ClientService {
 
 
  clients: Array<Client>= [
    {
      _id : 1,
      nom : "nom1",
      prenom : "Toto",
      age : 17,
      ca : 900,
      vip:false,
      dateAjout : new Date(2018,2,1)
     },
     {
      _id : 2,
      nom : "nom2",
      prenom : "Bernard",
      age : 19,
      ca : 1200,
      vip:false,
      dateAjout : new Date(2018,2,3)
     }
  ];

  private apiKey: string = '4epfGZWxSsN95XtoZzSsBm4AhgRfEY2F';
  private apiUrl: string = '/collections/form07';

  constructor(private http:HttpClient) { }

  getClients(): Observable<Client[]>{
    return this.http.get<Client[]>(`${this.apiUrl}?apiKey=${this.apiKey}`);
  }

  getClientById(_id: number):Observable<Client>{
    return this.http.get<Client>(`${this.apiUrl}/${_id}?apiKey=${this.apiKey}`);
  }

  deleteClient(id: number):Observable<Client[]>{
    return this.http.delete<any>(`${this.apiUrl}/${id}?apiKey=${this.apiKey}`);
  }

  addClient(client:Client){
    // if(client._id==0)
    //   client._id= Math.max(...this.clients.map(c => c._id))+1; // les 3 points décompose le tableau de number, map decompose le tableau de client en tableau de number avec les idclient 
    // this.clients.push(client); 

    //import httpclient

    return this.http.post<any>(`${this.apiUrl}?apiKey=${this.apiKey}`,client);
  }

}
