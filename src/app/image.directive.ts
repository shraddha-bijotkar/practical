import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appImage]'
})
export class ImageDirective {

  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement);
   }


}
