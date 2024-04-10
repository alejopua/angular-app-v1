import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appStyleBrother]',
})
export class StyleBrotherDirective {
  constructor(private element: ElementRef) {
    this.element.nativeElement.style.backgroundColor = 'green';
    this.element.nativeElement.style.textTransform = 'uppercase';
  }
}
