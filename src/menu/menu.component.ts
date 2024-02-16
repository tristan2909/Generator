import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    RouterModule,
    NgClass
  ],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  title: string = "Number";
  activeClass: string = this.title;

  changeTab(e: any) {
    this.title = e;
    this.activeClass = this.title;
    
  }

}
