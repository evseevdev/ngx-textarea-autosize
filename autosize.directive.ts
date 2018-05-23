import { AfterViewInit, Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: 'textarea[autosize]'
})
export class AutosizeDirective implements AfterViewInit {
  @HostBinding('style.overflow')
  public overflow = 'hidden';

  @HostBinding('rows')
  public rows = 1;

  constructor(public elem: ElementRef) { }

  public ngAfterViewInit() {
    this.resize();
  }

  @HostListener('input')
  public onInput() {
    this.resize();
  }

  public resize() {
    const { style, scrollHeight } = this.elem.nativeElement;
    style.height = 'auto';
    style.height = `${scrollHeight}px`;
  }
}
