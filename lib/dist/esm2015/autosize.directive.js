import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Input, HostBinding, Renderer2 } from '@angular/core';
let AutosizeDirective = class AutosizeDirective {
    constructor(elem, renderer) {
        this.elem = elem;
        this.renderer = renderer;
        this.overflow = 'hidden';
        this.rows = 1;
    }
    ngAfterViewInit() {
        this.resize();
    }
    ngDoCheck() {
        this.resize();
    }
    resize() {
        const textarea = this.elem.nativeElement;
        // Calculate border height which is not included in scrollHeight
        const borderHeight = textarea.offsetHeight - textarea.clientHeight;
        // Reset textarea height to auto that correctly calculate the new height
        this.setHeight('auto');
        // Set new height
        this.setHeight(`${textarea.scrollHeight + borderHeight}px`);
    }
    setHeight(value) {
        this.renderer.setStyle(this.elem.nativeElement, 'height', value);
    }
};
tslib_1.__decorate([
    HostBinding('style.overflow'),
    tslib_1.__metadata("design:type", Object)
], AutosizeDirective.prototype, "overflow", void 0);
tslib_1.__decorate([
    Input(),
    HostBinding('rows'),
    tslib_1.__metadata("design:type", Object)
], AutosizeDirective.prototype, "rows", void 0);
tslib_1.__decorate([
    HostListener('input'),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", []),
    tslib_1.__metadata("design:returntype", void 0)
], AutosizeDirective.prototype, "resize", null);
AutosizeDirective = tslib_1.__decorate([
    Directive({
        selector: 'textarea[autosize]'
    }),
    tslib_1.__metadata("design:paramtypes", [ElementRef, Renderer2])
], AutosizeDirective);
export { AutosizeDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NpemUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRleHRhcmVhLWF1dG9zaXplLyIsInNvdXJjZXMiOlsiYXV0b3NpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLFdBQVcsRUFFWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkIsSUFBYSxpQkFBaUIsR0FBOUIsTUFBYSxpQkFBaUI7SUFRNUIsWUFBb0IsSUFBZ0IsRUFBVSxRQUFtQjtRQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQU4xRCxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBSXBCLFNBQUksR0FBRyxDQUFDLENBQUM7SUFFb0QsQ0FBQztJQUU5RCxlQUFlO1FBQ3BCLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0sU0FBUztRQUNkLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBR08sTUFBTTtRQUNaLE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBb0MsQ0FBQztRQUNoRSxnRUFBZ0U7UUFDaEUsTUFBTSxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsWUFBWSxDQUFDO1FBQ25FLHdFQUF3RTtRQUN4RSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZCLGlCQUFpQjtRQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsUUFBUSxDQUFDLFlBQVksR0FBRyxZQUFZLElBQUksQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFTyxTQUFTLENBQUMsS0FBYTtRQUM3QixJQUFJLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRSxRQUFRLEVBQUUsS0FBSyxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUNGLENBQUE7QUE5QkM7SUFEQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7O21EQUNIO0FBSTNCO0lBRkMsS0FBSyxFQUFFO0lBQ1AsV0FBVyxDQUFDLE1BQU0sQ0FBQzs7K0NBQ0o7QUFhaEI7SUFEQyxZQUFZLENBQUMsT0FBTyxDQUFDOzs7OytDQVNyQjtBQTNCVSxpQkFBaUI7SUFIN0IsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLG9CQUFvQjtLQUMvQixDQUFDOzZDQVMwQixVQUFVLEVBQW9CLFNBQVM7R0FSdEQsaUJBQWlCLENBZ0M3QjtTQWhDWSxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBBZnRlclZpZXdJbml0LFxuICBEaXJlY3RpdmUsXG4gIEVsZW1lbnRSZWYsXG4gIEhvc3RMaXN0ZW5lcixcbiAgSW5wdXQsXG4gIEhvc3RCaW5kaW5nLFxuICBEb0NoZWNrLFxuICBSZW5kZXJlcjJcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ3RleHRhcmVhW2F1dG9zaXplXSdcbn0pXG5leHBvcnQgY2xhc3MgQXV0b3NpemVEaXJlY3RpdmUgaW1wbGVtZW50cyBBZnRlclZpZXdJbml0LCBEb0NoZWNrIHtcbiAgQEhvc3RCaW5kaW5nKCdzdHlsZS5vdmVyZmxvdycpXG4gIHB1YmxpYyBvdmVyZmxvdyA9ICdoaWRkZW4nO1xuXG4gIEBJbnB1dCgpXG4gIEBIb3N0QmluZGluZygncm93cycpXG4gIHB1YmxpYyByb3dzID0gMTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGVsZW06IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMikge31cblxuICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgIHRoaXMucmVzaXplKCk7XG4gIH1cblxuICBwdWJsaWMgbmdEb0NoZWNrKCkge1xuICAgIHRoaXMucmVzaXplKCk7XG4gIH1cblxuICBASG9zdExpc3RlbmVyKCdpbnB1dCcpXG4gIHByaXZhdGUgcmVzaXplKCkge1xuICAgIGNvbnN0IHRleHRhcmVhID0gdGhpcy5lbGVtLm5hdGl2ZUVsZW1lbnQgYXMgSFRNTFRleHRBcmVhRWxlbWVudDtcbiAgICAvLyBDYWxjdWxhdGUgYm9yZGVyIGhlaWdodCB3aGljaCBpcyBub3QgaW5jbHVkZWQgaW4gc2Nyb2xsSGVpZ2h0XG4gICAgY29uc3QgYm9yZGVySGVpZ2h0ID0gdGV4dGFyZWEub2Zmc2V0SGVpZ2h0IC0gdGV4dGFyZWEuY2xpZW50SGVpZ2h0O1xuICAgIC8vIFJlc2V0IHRleHRhcmVhIGhlaWdodCB0byBhdXRvIHRoYXQgY29ycmVjdGx5IGNhbGN1bGF0ZSB0aGUgbmV3IGhlaWdodFxuICAgIHRoaXMuc2V0SGVpZ2h0KCdhdXRvJyk7XG4gICAgLy8gU2V0IG5ldyBoZWlnaHRcbiAgICB0aGlzLnNldEhlaWdodChgJHt0ZXh0YXJlYS5zY3JvbGxIZWlnaHQgKyBib3JkZXJIZWlnaHR9cHhgKTtcbiAgfVxuXG4gIHByaXZhdGUgc2V0SGVpZ2h0KHZhbHVlOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlbmRlcmVyLnNldFN0eWxlKHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50LCAnaGVpZ2h0JywgdmFsdWUpO1xuICB9XG59XG4iXX0=