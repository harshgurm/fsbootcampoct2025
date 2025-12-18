import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class Test {

  constructor(private el: ElementRef) {
    console.log('Directive initialized', el);
    el.nativeElement.style.backgroundColor = 'red';
   }

}
