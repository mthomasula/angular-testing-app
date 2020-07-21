import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appUnless]'
})
export class UnlessDirective {

@Input() set appUnless(condition: boolean) {
  if (!condition) {
    this.vcRef.createEmbeddedView(this.refToTemplate)
  }else {
    this.vcRef.clear();
  }
} 

  
constructor(private refToTemplate: TemplateRef<any>, private vcRef: ViewContainerRef) { }

}
