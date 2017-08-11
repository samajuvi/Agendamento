import { Directive, HostListener, ElementRef } from '@angular/core';

@Directive({
  selector: '.has-submenu'
})
export class MenuDropdownDirective {

  constructor(private el: ElementRef) { }

  toggle() {
    this.el.nativeElement.classList.toggle('active');
  }
}

/**
* Allows the dropdown to be toggled via click.
*/
@Directive({
  selector: '.holder-menu',
})
export class MenuDropdownToggleDirective {
  constructor(private drop: MenuDropdownDirective) {}

  @HostListener('click', ['$event'])
  toggleOpen($event: any) {
    $event.preventDefault();
    this.drop.toggle();
  }
}

export const MENU_DROPDOWN_DIRECTIVES = [MenuDropdownDirective, MenuDropdownToggleDirective];