import { Component } from '@angular/core';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmicalculator.component.html',
  styleUrls: ['./bmicalculator.component.css']
})
export class BmiCalculatorComponent {
  weight: number = 0;
  height: number = 0 ;
  age: number = 0;
  bmi: number = 0;
  resultMessage: string = '';

  calculateBMI() {
    const height_m = this.height / 100;
    this.bmi = this.weight / (height_m ** 2);

    if (this.bmi >= 30) {
      this.resultMessage = 'Obese';
    } else if (this.bmi >= 25) {
      this.resultMessage = 'Overweight';
    } else if (this.bmi >= 18.5) {
      this.resultMessage = 'Healthy weight';
    } else {
      this.resultMessage = 'Underweight';
    }

    if (this.age < 15) {
      if (this.bmi >= 30) {
        this.resultMessage += ' (Obese for children)';
      } else if (this.bmi >= 25) {
        this.resultMessage += ' (Overweight for children)';
      } else if (this.bmi >= 5) {
        this.resultMessage += ' (Healthy weight for children)';
      } else {
        this.resultMessage += ' (Underweight for children)';
      }
    }
  }
}
