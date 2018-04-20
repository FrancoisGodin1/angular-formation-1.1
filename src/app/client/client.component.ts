import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {
  client= {
    nom: "nom1",
    prenom : "Toto",
    age : 17,
    ca: 1500,
    vip : false,
   }

  constructor() { 
  }

  ngOnInit() {
  }

  get taille(): string{
    return this.client.age+ 'px';
  }

  incrementerAge(): void{
    this.client.age++;
  }

  decrementerAge(): void{
    this.client.age--;
  }

  changerVip():void{
    this.client.vip=!this.client.vip;
  }

}
