import { Component, OnInit } from '@angular/core';
import { Client } from './../shared/client';
import { ClientComponent } from '../client/client.component';
import { ClientService } from '../client.service';
import { Observable } from 'rxjs/Observable';


@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {

  clientSelected: Client;
  clients : Observable<Client[]>;
  
  getClients(){

    this.clients = this.clientService.getClients();
    // this.clients = this.clientService.getClients(); avant la recuperation des client par api rest
  }

  constructor(private clientService: ClientService){ }

  ngOnInit() {
    this.getClients();
  }

  setSelectedClient(client : Client){
    console.log(client);
    this.clientSelected = client;
  }

  deleteClient(_id:number){
    this.clientService.deleteClient(_id).subscribe( () => this.getClients() );

    // this.clients = this.clientService.deleteClient(id);
    // if(this.clientSelected && this.clientSelected._id === id)
    //   this.clientSelected = undefined;
  }
}
