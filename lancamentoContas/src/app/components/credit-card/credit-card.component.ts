import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {

  @Input() cliente:any;
  @Input() cardNumber:any;
  @Input() validade:any; 
  @Input() bandeira:any; 

  constructor() { }

  ngOnInit(): void {
      this.cliente ='Nome Cliente';
      this.cardNumber = "0000"
      this.validade = "00/00";
      this.bandeira = ""; 
  }

}
