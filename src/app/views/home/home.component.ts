import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { ScrollTriggerDirective } from '../../directives/scroll-trigger.directive';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ ScrollTriggerDirective ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

 

}
