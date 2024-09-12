import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-wrapper',
  templateUrl: './directives-wrapper.component.html',
  styleUrl: './directives-wrapper.component.css'
})
export class DirectivesWrapperComponent {

  showParagraph =false
  count=0
  clicksArray:number[] = []
  toggleShowParagraph(){
    this.showParagraph = !this.showParagraph
    this.count=this.count+1
    this.clicksArray.push(this.count)
  }

  getColor(clickIndex: number){
    if(clickIndex>=5){
      return 'blue'
    }
    return 'transparent'
  }

}
