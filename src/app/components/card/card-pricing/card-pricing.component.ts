import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-pricing',
  templateUrl: './card-pricing.component.html',
  styleUrls: ['./card-pricing.component.css']
})
export class CardPricingComponent {
  @Input()
  produtoType:string = "Acessório"
  @Input()
  produtoPrice:string = "R$ 500,00"
  @Input()
  produtoName:string = "Camisa"

  constructor(){

  }
}
