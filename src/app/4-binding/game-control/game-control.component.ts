import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrl: './game-control.component.css'
})
export class GameControlComponent {

  @Output('numberGenerated')intervalFired : EventEmitter<number> = new EventEmitter();
  previousNumber =0
  gameInterval=0
  onStart(){
    this.gameInterval = setInterval(()=>{
      this.previousNumber++;
      this.intervalFired.emit(this.previousNumber)
      console.log(this.previousNumber)
    },1000)
  }

  onStop (){
    clearInterval(this.gameInterval)
  }
}
