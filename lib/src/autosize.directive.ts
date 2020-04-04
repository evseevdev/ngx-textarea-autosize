import {
  AfterViewInit,
  Directive,
  ElementRef,
  HostListener,
  Input,
  HostBinding,
  DoCheck,
  Renderer2
} from '@angular/core';

@Directive({
  selector: 'textarea[autosize]'
})
export class AutosizeDirective implements AfterViewInit, DoCheck {
  @HostBinding('style.overflow')
  public overflow = 'hidden';

  @Input()
  @HostBinding('rows')
  public rows = 1;

  constructor(private elem: ElementRef, private renderer: Renderer2) {}

  public ngAfterViewInit() {
    this.resize();
  }

  public ngDoCheck() {
    this.resize();
  }

  @HostListener('input')
  public resize() {
    const textarea = this.elem.nativeElement as HTMLTextAreaElement;
    // Calculate border height which is not included in scrollHeight
    const borderHeight = textarea.offsetHeight - textarea.clientHeight;
    // Reset textarea height to auto that correctly calculate the new height
    this.setHeight('auto');
    // Set new height
    this.setHeight(`${textarea.scrollHeight + borderHeight}px`);
  }

  private setHeight(value: string) {
    this.renderer.setStyle(this.elem.nativeElement, 'height', value);
  }
}
