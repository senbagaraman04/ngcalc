import { Component, OnInit, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})

@NgModule({
  imports: [     
    FormsModule
  ],
})

export class CalculatorComponent implements OnInit {
  public firstNumber:number;
	public secondNumber:number;
  public result:number;
  public operatorName : string;

  constructor() { }

  ngOnInit() {
    console.log("Calculator Started");
  }

  addition(){
    this.result = this.firstNumber + this.secondNumber;
    this.operatorName = "Addition";
  }
  subtraction(){
    this.result = this.firstNumber - this.secondNumber;
    this.operatorName = "Subtraction";
  }
  division(){
    this.result = this.firstNumber / this.secondNumber;
    this.operatorName = "Multiplication";
  }
  multiplication(){
    this.result = this.firstNumber *  this.secondNumber;
    this.operatorName = "Division";
  }

    

  }
