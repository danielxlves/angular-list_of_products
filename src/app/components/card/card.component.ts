import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input()
  produtoPhoto:string = ""
  @Input()
  flagLabel:string = ''
  @Input()
  produtoType:string = ""
  @Input()
  produtoPrice:string = ""
  @Input()
  produtoName:string = ""
}
