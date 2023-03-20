import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appErrorImage]'
})
export class ErrorImageDirective {

  constructor(private element:ElementRef<HTMLImageElement>) { }

  @HostListener('error')
  handleError(): void {
    this.element.nativeElement.src = "https://www.sam-manipulados.com/wp-content/uploads/2014/01/default_image_01.png";
  }
}
