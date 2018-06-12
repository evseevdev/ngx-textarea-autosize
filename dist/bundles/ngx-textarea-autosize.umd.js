(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/common'], factory) :
	(factory((global['ngx-textarea-autosize'] = {}),global.ng.core,global.ng.common));
}(this, (function (exports,core,common) { 'use strict';

var AutosizeDirective = /** @class */ (function () {
    function AutosizeDirective(elem) {
        this.elem = elem;
    }
    AutosizeDirective.prototype.ngAfterViewInit = function () {
        this.resize();
    };
    AutosizeDirective.prototype.resize = function () {
        var textarea = (this.elem.nativeElement);
        textarea.style.height = 'auto';
        textarea.style.height = textarea.scrollHeight + "px";
    };
    return AutosizeDirective;
}());
AutosizeDirective.decorators = [
    { type: core.Directive, args: [{
                selector: 'textarea[autosize]',
                host: {
                    'rows': '1',
                    'style': 'overflow: hidden'
                }
            },] },
];
AutosizeDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
AutosizeDirective.propDecorators = {
    "resize": [{ type: core.HostListener, args: ['input',] },],
};
var TextareaAutosizeModule = /** @class */ (function () {
    function TextareaAutosizeModule() {
    }
    return TextareaAutosizeModule;
}());
TextareaAutosizeModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [AutosizeDirective],
                exports: [AutosizeDirective]
            },] },
];
TextareaAutosizeModule.ctorParameters = function () { return []; };

exports.TextareaAutosizeModule = TextareaAutosizeModule;
exports.ɵa = AutosizeDirective;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ngx-textarea-autosize.umd.js.map
