import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Client } from '../shared/client';
import { ClientComponent } from '../client/client.component';


@Component({
  selector: '[app-client-list-row]',
  templateUrl: './client-list-row.component.html',
  styleUrls: ['./client-list-row.component.css']
})
export class ClientListRowComponent implements OnInit {

  @Input() client : Client; 
  @Output() clientSelected = new EventEmitter<Client>();
  @Output() clientDeleted = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  view(){
    this.clientSelected.emit(this.client);
  }

  delete(){
    this.clientDeleted.emit(this.client._id.$oid);
  }

}
