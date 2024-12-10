import { Component } from '@angular/core';
import { ScrollTriggerDirective } from '../../directives/scroll-trigger.directive';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [ ScrollTriggerDirective],
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.scss'
})
export class EducationSectionComponent {

}
