(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ngx-textarea-autosize', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['ngx-textarea-autosize'] = {}, global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

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
            core.HostBinding('style.overflow'),
            __metadata("design:type", Object)
        ], AutosizeDirective.prototype, "overflow", void 0);
        __decorate([
            core.Input(),
            core.HostBinding('rows'),
            __metadata("design:type", Object)
        ], AutosizeDirective.prototype, "rows", void 0);
        __decorate([
            core.HostListener('input'),
            __metadata("design:type", Function),
            __metadata("design:paramtypes", []),
            __metadata("design:returntype", void 0)
        ], AutosizeDirective.prototype, "resize", null);
        AutosizeDirective = __decorate([
            core.Directive({
                selector: 'textarea[autosize]'
            }),
            __metadata("design:paramtypes", [core.ElementRef, core.Renderer2])
        ], AutosizeDirective);
        return AutosizeDirective;
    }());

    var TextareaAutosizeModule = /** @class */ (function () {
        function TextareaAutosizeModule() {
        }
        TextareaAutosizeModule = __decorate([
            core.NgModule({
                imports: [common.CommonModule],
                declarations: [AutosizeDirective],
                exports: [AutosizeDirective]
            })
        ], TextareaAutosizeModule);
        return TextareaAutosizeModule;
    }());

    exports.TextareaAutosizeModule = TextareaAutosizeModule;
    exports.ɵa = AutosizeDirective;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ngx-textarea-autosize.umd.js.map
