import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding-wrapper',
  templateUrl: './databinding-wrapper.component.html',
  styleUrl: './databinding-wrapper.component.css'
})
export class DatabindingWrapperComponent {

  username:string = '';

  clearUsername (){
    this.username = ''
}
}
