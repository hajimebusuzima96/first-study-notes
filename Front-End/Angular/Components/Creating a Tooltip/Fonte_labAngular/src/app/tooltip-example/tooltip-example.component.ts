import { Component, } from '@angular/core';

@Component({
  selector: 'app-tooltip-example',
  templateUrl: './tooltip-example.component.html',
  styleUrls: ['./tooltip-example.component.css']
})
export class TooltipExampleComponent {

  public visible = false;

  exibeTooltip() {
    this.visible = true;
  }

  escondeTooltip() {
    this.visible = false;
  }
}
