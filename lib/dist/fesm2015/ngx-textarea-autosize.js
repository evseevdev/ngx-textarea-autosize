import { __decorate, __metadata } from 'tslib';
import { HostBinding, Input, HostListener, Directive, ElementRef, Renderer2, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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

let TextareaAutosizeModule = class TextareaAutosizeModule {
};
TextareaAutosizeModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [AutosizeDirective],
        exports: [AutosizeDirective]
    })
], TextareaAutosizeModule);

/**
 * Generated bundle index. Do not edit.
 */

export { TextareaAutosizeModule, AutosizeDirective as ɵa };
//# sourceMappingURL=ngx-textarea-autosize.js.map
