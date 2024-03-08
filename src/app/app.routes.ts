import { Routes } from '@angular/router';
import { NumberComponent } from '../number/number.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { PasswordComponent } from './password/password.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/Number',
    pathMatch: 'full'
  },
  {
    path: 'Number',
    component: NumberComponent,
    title: 'Number page'
  },
  {
    path: 'Password',
    component: PasswordComponent,
    title: 'Password page'
  },
  {
    path: 'Mixer',
    component: NumberComponent,
    title: 'Mixer page'
  },
  {
    path: 'Color',
    component: NumberComponent,
    title: 'Color page'
  },
  {
    path: 'Constant',
    component: NumberComponent,
    title: 'Constant page'
  },
  {
    path: 'Date',
    component: NumberComponent,
    title: 'Date page'
  },
  { path: '**',
    component: PagenotfoundComponent
  },
];
