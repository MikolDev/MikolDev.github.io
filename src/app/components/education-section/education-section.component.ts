import { HttpClient, HttpClientModule } from '@angular/common/http';

import { Component } from '@angular/core';
import { SchoolInfo } from '../../types/school-info';
import { ScrollTriggerDirective } from '../../directives/scroll-trigger.directive';

@Component({
  selector: 'app-education-section',
  standalone: true,
  imports: [ ScrollTriggerDirective, HttpClientModule],
  templateUrl: './education-section.component.html',
  styleUrl: './education-section.component.scss'
})
export class EducationSectionComponent {
  schools: SchoolInfo[] = [];
  currentSchoolIndex = 0;
  currentSchool: SchoolInfo | null = null;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<SchoolInfo[]>('assets/data/education.json').subscribe((data) => {
      this.schools = data;
      this.currentSchool = this.schools[this.currentSchoolIndex];
    });
    
  }

  prev() {
    if (this.currentSchoolIndex > 0) {
      this.currentSchoolIndex--;
    } else {
      this.currentSchoolIndex = this.schools.length - 1;
    }
    this.currentSchool = this.schools[this.currentSchoolIndex];
    console.log(this.currentSchool);
  }

  next() {
    if (this.currentSchoolIndex < this.schools.length - 1) {
      this.currentSchoolIndex++;
    } else {
      this.currentSchoolIndex = 0;
    }
    this.currentSchool = this.schools[this.currentSchoolIndex];
    console.log(this.currentSchool);
  }
}
