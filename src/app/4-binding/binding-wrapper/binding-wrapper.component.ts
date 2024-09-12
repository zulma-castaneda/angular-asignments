import { Component } from '@angular/core';

@Component({
  selector: 'app-binding-wrapper',
  templateUrl: './binding-wrapper.component.html',
  styleUrl: './binding-wrapper.component.css'
})
export class BindingWrapperComponent {
  gameNumbers:number[] =[]
  onNumberAdded(gameNumber:number){
  this.gameNumbers.push(gameNumber)
  }
}
