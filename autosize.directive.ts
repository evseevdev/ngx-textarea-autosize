import {AfterViewInit, Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: 'textarea[autosize]'
})
export class AutosizeDirective implements AfterViewInit {

  constructor(public element: ElementRef) {
  }

  @HostListener('input')
  public onInput() {
    this.resize();
  }

  ngAfterViewInit(): void {
    this.resize();
  }

  public resize() {
    const style = this.element.nativeElement.style;
    style.overflow = 'hidden';
    style.height = 'auto';

    const height = this.element.nativeElement.scrollHeight;
    style.height = `${height}px`;
  }

}
