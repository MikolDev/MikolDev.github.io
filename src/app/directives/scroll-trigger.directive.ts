import { AfterViewInit, Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appScrollTrigger]',
  standalone: true
})
export class ScrollTriggerDirective implements AfterViewInit {

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          this.renderer.addClass(this.element.nativeElement, 'active');
        }
      });
    }, { threshold: 0.1 });
    observer.observe(this.element.nativeElement);
  }

}
