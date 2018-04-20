import { Component, OnInit, Input } from '@angular/core';
import { Client } from '../shared/client';
import { ClientService } from '../client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-view',
  templateUrl: './client-view.component.html',
  styleUrls: ['./client-view.component.css']
})
export class ClientViewComponent implements OnInit {

  @Input() client : Client;

  constructor(private clientService: ClientService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(
      params => this.clientService.getClientById(params['id']).subscribe(client => this.client = client)
    );
  }

}
