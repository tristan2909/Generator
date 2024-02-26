import { Component, OnInit } from '@angular/core';
import { NumberOptions } from '../app/numberOptions';
import { NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NumberOptionsService } from '../app/numberOptions.service';

@Component({
  selector: 'app-number',
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './number.component.html',
  styleUrl: './number.component.scss'
})
export class NumberComponent implements OnInit {

  display: string = "none";
  active: boolean = false;

  numbers: number[] = [];

  id!: number;
  numberOptions!: NumberOptions;

  constructor(private numberOptionsService: NumberOptionsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.numberOptions = new NumberOptions();

    this.id = this.route.snapshot.params['id'];

    this.numberOptionsService.getNumberOptions()
      .subscribe({next: (data: NumberOptions[]) => {
        console.log("data : ", data[0]);
        this.numberOptions = data[0];        
      }, error: (error: any) => console.log(error)});
  }

  updateNumberOptions() {
    this.numberOptionsService.updateNumberOptions(this.id, this.numberOptions)
      .subscribe({next: (data: any) => {
        console.log(data);
        this.numberOptions = new NumberOptions();
      }, error: (error: any) => console.log(error)});
  }

  // onSubmit() {
  //   this.updateNumberOptions();    
  // }

  openCloseAcc() {
    this.active = !this.active;
    if (this.display === "block") {
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
    for (let i = 0; i < this.numberOptions.nb; i++) {
      if (this.numberOptions.noRepeat) {
        do {
          nb = Math.floor(Math.random() * (this.numberOptions.max)) + this.numberOptions.min;
        } while (this.numbers.includes(nb))
      } else {
        nb = Math.floor(Math.random() * this.numberOptions.max) + this.numberOptions.min;
      }
      this.numbers.push(nb);
    }
    if (this.numberOptions.sort) {
      this.numbers.sort((a, b): number => { return a - b });
    }
  }
}
