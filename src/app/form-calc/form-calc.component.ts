import { Component } from '@angular/core';

@Component({
  selector: 'app-form-calc',
  templateUrl: './form-calc.component.html',
  styleUrl: './form-calc.component.css',
})
export class FormCalcComponent {
  num1: number = 0;
  num2: number = 0;
  res: number = 0;
  op: string = '+';

  resultado(): void{
    switch (this.op){
      case '+':
        this.res = this.num1 + this.num2;
        break;
      case '*':
        this.res = this.num1 * this.num2;
        break;
      case '-':
        this.res = this.num1 - this.num2;
        break;
      case '/':
        if(this.num2 >= 0){
          this.res = this.num1 / this.num2;
        }
        else{
          this.res = 0
        }
        break;
      case '%':
        if(this.num2 >= 0){
          this.res = (this.num1 / this.num2) * 100;
        }
        else{
          this.res = 0;
        }
        break;
      default:
        this.res = 0;
    }
  }
}
