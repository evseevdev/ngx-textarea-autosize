import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Input, HostBinding, Renderer2 } from '@angular/core';
var AutosizeDirective = /** @class */ (function () {
    function AutosizeDirective(elem, renderer) {
        this.elem = elem;
        this.renderer = renderer;
        this.overflow = 'hidden';
        this.rows = 1;
    }
    AutosizeDirective.prototype.ngAfterViewInit = function () {
        this.resize();
    };
    AutosizeDirective.prototype.ngDoCheck = function () {
        this.resize();
    };
    AutosizeDirective.prototype.resize = function () {
        var textarea = this.elem.nativeElement;
        // Calculate border height which is not included in scrollHeight
        var borderHeight = textarea.offsetHeight - textarea.clientHeight;
        // Reset textarea height to auto that correctly calculate the new height
        this.setHeight('auto');
        // Set new height
        this.setHeight(textarea.scrollHeight + borderHeight + "px");
    };
    AutosizeDirective.prototype.setHeight = function (value) {
        this.renderer.setStyle(this.elem.nativeElement, 'height', value);
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
    return AutosizeDirective;
}());
export { AutosizeDirective };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0b3NpemUuZGlyZWN0aXZlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmd4LXRleHRhcmVhLWF1dG9zaXplLyIsInNvdXJjZXMiOlsiYXV0b3NpemUuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBRUwsU0FBUyxFQUNULFVBQVUsRUFDVixZQUFZLEVBQ1osS0FBSyxFQUNMLFdBQVcsRUFFWCxTQUFTLEVBQ1YsTUFBTSxlQUFlLENBQUM7QUFLdkI7SUFRRSwyQkFBb0IsSUFBZ0IsRUFBVSxRQUFtQjtRQUE3QyxTQUFJLEdBQUosSUFBSSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQU4xRCxhQUFRLEdBQUcsUUFBUSxDQUFDO1FBSXBCLFNBQUksR0FBRyxDQUFDLENBQUM7SUFFb0QsQ0FBQztJQUU5RCwyQ0FBZSxHQUF0QjtRQUNFLElBQUksQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUNoQixDQUFDO0lBRU0scUNBQVMsR0FBaEI7UUFDRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7SUFDaEIsQ0FBQztJQUdPLGtDQUFNLEdBQWQ7UUFDRSxJQUFNLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQW9DLENBQUM7UUFDaEUsZ0VBQWdFO1FBQ2hFLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxZQUFZLEdBQUcsUUFBUSxDQUFDLFlBQVksQ0FBQztRQUNuRSx3RUFBd0U7UUFDeEUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUN2QixpQkFBaUI7UUFDakIsSUFBSSxDQUFDLFNBQVMsQ0FBSSxRQUFRLENBQUMsWUFBWSxHQUFHLFlBQVksT0FBSSxDQUFDLENBQUM7SUFDOUQsQ0FBQztJQUVPLHFDQUFTLEdBQWpCLFVBQWtCLEtBQWE7UUFDN0IsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsUUFBUSxFQUFFLEtBQUssQ0FBQyxDQUFDO0lBQ25FLENBQUM7SUE3QkQ7UUFEQyxXQUFXLENBQUMsZ0JBQWdCLENBQUM7O3VEQUNIO0lBSTNCO1FBRkMsS0FBSyxFQUFFO1FBQ1AsV0FBVyxDQUFDLE1BQU0sQ0FBQzs7bURBQ0o7SUFhaEI7UUFEQyxZQUFZLENBQUMsT0FBTyxDQUFDOzs7O21EQVNyQjtJQTNCVSxpQkFBaUI7UUFIN0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtTQUMvQixDQUFDO2lEQVMwQixVQUFVLEVBQW9CLFNBQVM7T0FSdEQsaUJBQWlCLENBZ0M3QjtJQUFELHdCQUFDO0NBQUEsQUFoQ0QsSUFnQ0M7U0FoQ1ksaUJBQWlCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgRGlyZWN0aXZlLFxuICBFbGVtZW50UmVmLFxuICBIb3N0TGlzdGVuZXIsXG4gIElucHV0LFxuICBIb3N0QmluZGluZyxcbiAgRG9DaGVjayxcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICd0ZXh0YXJlYVthdXRvc2l6ZV0nXG59KVxuZXhwb3J0IGNsYXNzIEF1dG9zaXplRGlyZWN0aXZlIGltcGxlbWVudHMgQWZ0ZXJWaWV3SW5pdCwgRG9DaGVjayB7XG4gIEBIb3N0QmluZGluZygnc3R5bGUub3ZlcmZsb3cnKVxuICBwdWJsaWMgb3ZlcmZsb3cgPSAnaGlkZGVuJztcblxuICBASW5wdXQoKVxuICBASG9zdEJpbmRpbmcoJ3Jvd3MnKVxuICBwdWJsaWMgcm93cyA9IDE7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbGVtOiBFbGVtZW50UmVmLCBwcml2YXRlIHJlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuICB9XG5cbiAgcHVibGljIG5nRG9DaGVjaygpIHtcbiAgICB0aGlzLnJlc2l6ZSgpO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignaW5wdXQnKVxuICBwcml2YXRlIHJlc2l6ZSgpIHtcbiAgICBjb25zdCB0ZXh0YXJlYSA9IHRoaXMuZWxlbS5uYXRpdmVFbGVtZW50IGFzIEhUTUxUZXh0QXJlYUVsZW1lbnQ7XG4gICAgLy8gQ2FsY3VsYXRlIGJvcmRlciBoZWlnaHQgd2hpY2ggaXMgbm90IGluY2x1ZGVkIGluIHNjcm9sbEhlaWdodFxuICAgIGNvbnN0IGJvcmRlckhlaWdodCA9IHRleHRhcmVhLm9mZnNldEhlaWdodCAtIHRleHRhcmVhLmNsaWVudEhlaWdodDtcbiAgICAvLyBSZXNldCB0ZXh0YXJlYSBoZWlnaHQgdG8gYXV0byB0aGF0IGNvcnJlY3RseSBjYWxjdWxhdGUgdGhlIG5ldyBoZWlnaHRcbiAgICB0aGlzLnNldEhlaWdodCgnYXV0bycpO1xuICAgIC8vIFNldCBuZXcgaGVpZ2h0XG4gICAgdGhpcy5zZXRIZWlnaHQoYCR7dGV4dGFyZWEuc2Nyb2xsSGVpZ2h0ICsgYm9yZGVySGVpZ2h0fXB4YCk7XG4gIH1cblxuICBwcml2YXRlIHNldEhlaWdodCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgdGhpcy5yZW5kZXJlci5zZXRTdHlsZSh0aGlzLmVsZW0ubmF0aXZlRWxlbWVudCwgJ2hlaWdodCcsIHZhbHVlKTtcbiAgfVxufVxuIl19