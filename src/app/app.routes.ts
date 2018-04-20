import { Routes } from '@angular/router';
import { ClientListComponent } from './client-list/client-list.component';
import { ClientAddComponent } from './client-add/client-add.component';
import { ClientViewComponent } from './client-view/client-view.component';

export const appRoutes: Routes =[
    {path: 'index', component: ClientListComponent},
    {path: 'view/:id', component: ClientViewComponent},
    {path: 'add', component: ClientAddComponent},
    {path: '', redirectTo: '/index', pathMatch: 'full'}
]