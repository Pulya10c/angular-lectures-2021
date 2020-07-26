import { Component } from '@angular/core';

@Component({
  selector: 'app-attribute-directives',
  templateUrl: './attribute-directives.component.html',
  styleUrls: ['./attribute-directives.component.scss']
})
export class AttributeDirectivesComponent {

  public paragraphColor = 'orange';

  public color: string;

  public handleClick(event: MouseEvent | string) {
    console.log('click', event);
  }

}
