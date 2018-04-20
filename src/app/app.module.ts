import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ClientComponent } from './client/client.component';
import { ClientListComponent } from './client-list/client-list.component';
import { ConfidentialPipe } from './shared/pipes/confidential.pipe';
import { CurrencyPipe } from '@angular/common';
import { ClientListRowComponent } from './client-list-row/client-list-row.component';
import { ClientViewComponent } from './client-view/client-view.component';
import { ClientService } from './client.service';
import { ClientAddComponent } from './client-add/client-add.component';

registerLocaleData(localeFr,'fr');

@NgModule({
  declarations: [
    AppComponent,
    ClientComponent,
    ClientListRowComponent,
    ClientListComponent,
    ConfidentialPipe,
    ClientViewComponent,
    ClientAddComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true}),
    HttpClientModule    
  ],
  providers: [ClientService,CurrencyPipe,{ provide : LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
