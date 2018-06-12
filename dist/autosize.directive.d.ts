import { AfterViewInit, ElementRef } from '@angular/core';
export declare class AutosizeDirective implements AfterViewInit {
    private elem;
    constructor(elem: ElementRef);
    ngAfterViewInit(): void;
    private resize();
}
