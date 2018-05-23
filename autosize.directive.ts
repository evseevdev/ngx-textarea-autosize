import {AfterViewInit, Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: 'textarea[autosize]'
})
export class AutosizeDirective implements AfterViewInit {
  @HostBinding('style.overflow') overflow = 'hidden';
  @HostBinding('rows') rows = 1;

  @HostListener('input')
  public onInput() {
    this.resize();
  }

  constructor(public hostElem: ElementRef) {
  }

  ngAfterViewInit(): void {
    this.resize();
  }

  public resize() {
    const style = this.hostElem.nativeElement.style;
    style.height = 'auto';
    style.height = `${this.hostElem.nativeElement.scrollHeight}px`;
  }

}
