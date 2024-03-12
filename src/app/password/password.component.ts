import { Component, OnInit } from '@angular/core';
import { PasswordOptions } from '../passwordOptions';
import { NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordOptionsService } from '../passwordOptions.service';

@Component({
  selector: 'app-password',
  host: {
    class: 'main-content'
  },
  standalone: true,
  imports: [
    NgClass,
  ],
  templateUrl: './password.component.html',
  styleUrl: './password.component.scss'
})
export class PasswordComponent implements OnInit {
  
  display: string = "none";
  active: boolean = false;

  id!: number;
  passwordOptions!: PasswordOptions;

  constructor(private passwordOptionsService: PasswordOptionsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      this.passwordOptions = new PasswordOptions();

      this.passwordOptionsService.getPasswordOptions()
        .subscribe({next: (data: PasswordOptions[]) => {
          console.log("data : ", data[0]);
          this.passwordOptions = data[0];
        }, error: (error: any) => console.log(error)});
  }

  updatePasswordOption() {
    this.passwordOptionsService.updatePasswordOptions(1, this.passwordOptions)
      .subscribe({next: (data: any) => {
        console.log(data);
        
      }, error: (error: any) => console.log(error)});
  }

  save() {
    this.updatePasswordOption();
  }

  openCloseAcc() {
    this.active = !this.active;
    this.display = this.display === "block" ? "none" : "block";
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

}
