import { Component, OnInit } from '@angular/core';
import { PasswordOptions } from '../passwordOptions';
import { NgClass } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PasswordOptionsService } from '../passwordOptions.service';

@Component({
  selector: 'app-password',
  host: {
    class: 'main-content',
    style: 'backgroundColor: rgb(60 98 79)'
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
  maxLength!: number;

  password: string = "";

  id!: number;
  passwordOptions!: PasswordOptions;

  constructor(private passwordOptionsService: PasswordOptionsService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit(): void {
      this.passwordOptions = new PasswordOptions();

      this.passwordOptionsService.getPasswordOptions()
        .subscribe({next: (data: PasswordOptions[]) => {
          console.log("data : ", data[0]);
          this.passwordOptions = data[0];
          this.maxLength = this.passwordOptions.onlyDigits ? 10 : this.passwordOptions.onlyHexa ? 16 : 50;
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

  manageSwitches(s: string) {
    switch (s) {
      case "digits":
        this.maxLength = 50;
        this.passwordOptions.useDigits = !this.passwordOptions.useDigits;
        this.passwordOptions.onlyDigits = false;
        this.passwordOptions.onlyHexa = false;
        break;
      case "specChars":
        this.maxLength = 50;
        this.passwordOptions.useSpecChars = !this.passwordOptions.useSpecChars;
        this.passwordOptions.onlyDigits = false;
        this.passwordOptions.onlyHexa = false;
        break;
      case "onlyDigits":
        this.passwordOptions.onlyDigits = !this.passwordOptions.onlyDigits;
        this.passwordOptions.useDigits = false;
        this.passwordOptions.useSpecChars = false;
        this.passwordOptions.onlyHexa = false;
        this.maxLength = this.passwordOptions.onlyDigits ? 10 : 50;
        this.passwordOptions.lengthC = this.passwordOptions.onlyDigits && this.passwordOptions.lengthC > 10 ? 10 : this.passwordOptions.lengthC;
        break;
      case "hexa":
        this.passwordOptions.onlyHexa = !this.passwordOptions.onlyHexa;
        this.passwordOptions.useDigits = false;
        this.passwordOptions.useSpecChars = false;
        this.passwordOptions.onlyDigits = false;
        this.maxLength = this.passwordOptions.onlyHexa ? 16 : 50;
        this.passwordOptions.lengthC = this.passwordOptions.onlyHexa && this.passwordOptions.lengthC > 16 ? 16 : this.passwordOptions.lengthC;

        break;
    }
  }

  getValue(event: Event): string {
    return (event.target as HTMLInputElement).value;
  }

  generatePassword() {
    let baseChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if(this.passwordOptions.useDigits) baseChars += "01235689";
    if(this.passwordOptions.useSpecChars) baseChars += "-_=+~!@#$";
    if(this.passwordOptions.onlyDigits) baseChars = "0123456789";
    this.password = "";
    let randChar = "";
    for(let i = 0; i < this.passwordOptions.lengthC; i++) {
      do {
        randChar = baseChars.charAt(Math.floor(Math.random() * baseChars.length));
      } while(this.passwordOptions.noRepeat && this.password.split("").includes(randChar))
      this.password += randChar;
    }
  }

}
