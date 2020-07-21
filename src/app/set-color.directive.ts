import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appSetColor]'
})
export class SetColorDirective {

  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'yellow';
  
  @HostBinding('style.backgroundColor') backgroundColor: string;

  constructor(private ref: ElementRef, private rend: Renderer2) { }


  ngOnInit() {
    this.backgroundColor = this.defaultColor;

  }

@HostListener('mouseenter') mouseenter(eventData: Event) {
  this.backgroundColor = this.highlightColor;
}

@HostListener('mouseleave') mouseleave(eventData: Event) {
  this.backgroundColor = this.defaultColor;
}

}
