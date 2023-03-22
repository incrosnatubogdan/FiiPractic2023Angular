import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent {
  public isVisible: boolean = true;

  public visibleEntries: string[] = ['first', 'second', 'third', 'forth']


  public setIsVisible() {
    this.isVisible = !this.isVisible
  }
}
