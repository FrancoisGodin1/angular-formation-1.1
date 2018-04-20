import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { Client } from '../shared/client';
import { ClientService } from '../client.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-client-add',
  templateUrl: './client-add.component.html',
  styleUrls: ['./client-add.component.css']
})
export class ClientAddComponent implements OnInit {

  clientForm: FormGroup; 
  nomControl: FormControl;
  prenomControl: FormControl;

  constructor(private fb: FormBuilder,private clientService: ClientService,private router:Router) {
    
    this.nomControl = fb.control('',[Validators.required, Validators.minLength(3),Validators.maxLength(15)]);
    this.prenomControl = fb.control('',Validators.required);
    this.clientForm = fb.group({
      identite: fb.group({
        prenom: this.prenomControl,
        nom: this.nomControl
      }),
      age: fb.control('',Validators.required),
      ca: fb.control('',Validators.required),
      vip: fb.control('')
    })
   }

  ngOnInit() {
  }

  ajouterClient(){
    let formValues = this.clientForm.value;
    let client: Client = {
      _id: undefined,
      nom: formValues.identite.nom,
      prenom: formValues.identite.prenom,
      age: formValues.age,
      ca: formValues.ca,
      vip : formValues.vip,
      dateAjout: new Date()
    }
    this.clientService.addClient(client).subscribe(() => this.router.navigate(['']) );
    //this.clientForm.reset();
    this.router.navigate(['']);
  }

}
