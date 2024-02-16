import { Component } from '@angular/core';
import { Options } from '../options';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './number.component.html',
  styleUrl: './number.component.scss'
})
export class NumberComponent {

  display: string = "none";
  active: boolean = false;

  numbers: number[] = [];

  options: Options = {
    number: {
      min: 0,
      max: 5,
      nb: 1,
      noRepeats: true,
      sort: false
    }
  };
  
  openCloseAcc() {
    this.active = !this.active;
    if(this.display === "block") {
      this.display = "none";
    } else {
      this.display = "block";
    }
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  generateNumbers() {
    this.numbers = [];
    let nb = 0;
    for(let i = 0 ; i<this.options.number.nb ; i++){
      if(this.options.number.noRepeats) {
        do {
          nb = Math.floor(Math.random() * (this.options.number.max+1)) + this.options.number.min;
        } while(this.numbers.includes(nb))
      } else {
        nb = Math.floor(Math.random() * this.options.number.max) + this.options.number.min;
      }
      this.numbers.push(nb);
    }
    if(this.options.number.sort) {
      this.numbers.sort((a,b): number => {return a-b});
    }
  }

  ngOnInit() {
    
  }

  



}
