import { Routes } from '@angular/router';
import { NumberComponent } from '../number/number.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';

export const routes: Routes = [
  {
    path: 'number',
    component: NumberComponent,
    title: 'Number page'
  },
  { 
    path: '',
    redirectTo: '/number',
    pathMatch: 'full'
  },
  {
    path: 'password',
    component: NumberComponent,
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
