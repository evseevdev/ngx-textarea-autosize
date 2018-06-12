import { Directive, ElementRef, HostListener, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AutosizeDirective {
    /**
     * @param {?} elem
     */
    constructor(elem) {
        this.elem = elem;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.resize();
    }
    /**
     * @return {?}
     */
    resize() {
        const /** @type {?} */ textarea = /** @type {?} */ (this.elem.nativeElement);
        // Reset textarea height to auto that correctly calculate the new height
        textarea.style.height = 'auto';
        // Set new height
        textarea.style.height = `${textarea.scrollHeight}px`;
    }
}
AutosizeDirective.decorators = [
    { type: Directive, args: [{
                selector: 'textarea[autosize]',
                host: {
                    'rows': '1',
                    'style': 'overflow: hidden'
                }
            },] },
];
/** @nocollapse */
AutosizeDirective.ctorParameters = () => [
    { type: ElementRef, },
];
AutosizeDirective.propDecorators = {
    "resize": [{ type: HostListener, args: ['input',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TextareaAutosizeModule {
}
TextareaAutosizeModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [AutosizeDirective],
                exports: [AutosizeDirective]
            },] },
];
/** @nocollapse */
TextareaAutosizeModule.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { TextareaAutosizeModule, AutosizeDirective as ɵa };
//# sourceMappingURL=ngx-textarea-autosize.js.map
