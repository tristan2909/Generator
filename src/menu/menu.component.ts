import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
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
  title!: string;
  activeClass!: string;

  constructor(private router: Router) {
    this.router.events.subscribe(value => {
      this.title = this.activeClass = this.router.url.toString().substring(1);
    })
  }

  changeTab(e: any) {
    this.title = e;
    this.activeClass = this.title;

  }

}
