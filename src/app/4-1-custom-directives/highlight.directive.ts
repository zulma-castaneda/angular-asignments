import {Directive, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  @HostBinding('class.highlight') hasClass = false;
  @HostListener('click') toggleClass(){
    this.hasClass = !this.hasClass
  }
  constructor() { }

}
