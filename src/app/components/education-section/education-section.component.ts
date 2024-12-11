import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SchoolInfo } from '../../types/school-info';
import { ScrollTriggerDirective } from '../../directives/scroll-trigger.directive';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [ ScrollTriggerDirective, HttpClientModule, CommonModule],
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.scss'
})
export class EducationSectionComponent {
  schools: SchoolInfo[] = [];
  currentSchoolIndex = 0;
  currentSchool: SchoolInfo | null = null;
  fadingOut = false;
  fadingIn = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<SchoolInfo[]>('assets/data/education.json').subscribe((data) => {
      this.schools = data;
      this.currentSchool = this.schools[this.currentSchoolIndex];
    }); 
  }

  async runAnimation() {
    this.fadingOut = true;
    await this.delay(500);
    this.fadingOut = false;
    this.fadingIn = true;
  }

  async prev() {
    if (this.fadingOut) return;
    if (this.currentSchoolIndex > 0) {
      this.currentSchoolIndex--;
    } else {
      this.currentSchoolIndex = this.schools.length - 1;
    }
    await this.runAnimation();
    this.currentSchool = this.schools[this.currentSchoolIndex];
  }

  async next() {
    if (this.fadingOut) return;
    if (this.currentSchoolIndex < this.schools.length - 1) {
      this.currentSchoolIndex++;
    } else {
      this.currentSchoolIndex = 0;
    }
    await this.runAnimation();
    this.currentSchool = this.schools[this.currentSchoolIndex];
  }

  // delaying for animations
  delay(ms: number): Promise<void> {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
}
