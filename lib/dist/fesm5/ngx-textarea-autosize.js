import { __decorate, __metadata } from 'tslib';
import { HostBinding, Input, HostListener, Directive, ElementRef, Renderer2, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
    __decorate([
        HostBinding('style.overflow'),
        __metadata("design:type", Object)
    ], AutosizeDirective.prototype, "overflow", void 0);
    __decorate([
        Input(),
        HostBinding('rows'),
        __metadata("design:type", Object)
    ], AutosizeDirective.prototype, "rows", void 0);
    __decorate([
        HostListener('input'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AutosizeDirective.prototype, "resize", null);
    AutosizeDirective = __decorate([
        Directive({
            selector: 'textarea[autosize]'
        }),
        __metadata("design:paramtypes", [ElementRef, Renderer2])
    ], AutosizeDirective);
    return AutosizeDirective;
}());

var TextareaAutosizeModule = /** @class */ (function () {
    function TextareaAutosizeModule() {
    }
    TextareaAutosizeModule = __decorate([
        NgModule({
            imports: [CommonModule],
            declarations: [AutosizeDirective],
            exports: [AutosizeDirective]
        })
    ], TextareaAutosizeModule);
    return TextareaAutosizeModule;
}());

/**
 * Generated bundle index. Do not edit.
 */

export { TextareaAutosizeModule, AutosizeDirective as ɵa };
//# sourceMappingURL=ngx-textarea-autosize.js.map
