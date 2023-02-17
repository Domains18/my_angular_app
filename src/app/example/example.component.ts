import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent {
  @Input() name: string = "not shaun";
  @Input() lastName: string = "not mckinnon";
}
