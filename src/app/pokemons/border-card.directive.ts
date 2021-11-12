import { Directive, ElementRef, HostListener, Input } from '@angular/core';
// class Directive est utilisée avec le décorateur @Directive
// ElementRef représente un élément du DOM

@Directive({
    selector: '[pkmnBorderCard]'
  })
  //selector avec l'attribut '[pkmnBorderCard]' => la Directive s'applique 
  //à tous les éléments du DOM avec l'attribut pkmnBorderCard

  export class BorderCardDirective {

    private initialColor: string = '#f5f5f5';
    private defaultColor: string = '#009688';
    private defaultHeight: number = 200; 

    constructor(private el: ElementRef) {
        this.setBorder(this.initialColor);
        this.setHeight(this.defaultHeight);
    }

    @Input('pkmnBorderCard') borderColor: string; //alias

    // @HostListener permet lier la méthode de Directive à un event donné 
    
    @HostListener('mouseenter') onMouseEnter() {
        this.setBorder(this.borderColor || this.defaultColor);
    }

    @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialColor);
}

    private setBorder(color: string) {
        let border = 'solid 4px ' + color;
        this.el.nativeElement.style.border = border;
    }

    private setHeight(height: number) {
        this.el.nativeElement.style.height = height + 'px';
    }
  }