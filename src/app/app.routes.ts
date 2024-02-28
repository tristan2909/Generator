import { Routes } from '@angular/router';
import { NumberComponent } from '../number/number.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { PasswordComponent } from './password/password.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/number',
    pathMatch: 'full'
  },
  {
    path: 'number',
    component: NumberComponent,
    title: 'Number page'
  },
  {
    path: 'password',
    component: PasswordComponent,
    title: 'Password page'
  },
  {
    path: 'mixer',
    component: NumberComponent,
    title: 'Mixer page'
  },
  {
    path: 'color',
    component: NumberComponent,
    title: 'Color page'
  },
  {
    path: 'constant',
    component: NumberComponent,
    title: 'Constant page'
  },
  {
    path: 'date',
    component: NumberComponent,
    title: 'Date page'
  },
  { path: '**',
    component: PagenotfoundComponent
  },
];
