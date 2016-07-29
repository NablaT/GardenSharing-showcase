/**
 * Directive HighlightStarDirective
 */
import {Directive, ElementRef, Input} from '@angular/core';
@Directive({
    selector: '[highlightStar]'
})
export class HighlightStarDirective {
    constructor(el: ElementRef) {
        el.nativeElement.style.backgroundColor = 'yellow';
    }
}