import { Component } from '@angular/core';
import { EducationSectionComponent } from '../../components/education-section/education-section.component';
import { ScrollTriggerDirective } from '../../directives/scroll-trigger.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ScrollTriggerDirective, EducationSectionComponent ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 

}
