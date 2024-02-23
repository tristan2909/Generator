import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumberComponent } from '../number/number.component';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    NumberComponent,
    MenuComponent,
    RouterModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
}
