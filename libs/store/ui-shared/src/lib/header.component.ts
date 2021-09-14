import { Component, Input } from '@angular/core';

@Component({
  selector: 'bg-hoard-header',
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() title = '';
}
