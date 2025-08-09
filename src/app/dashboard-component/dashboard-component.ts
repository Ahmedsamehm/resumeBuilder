import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { FormServiceService } from '../create-cv-component/FormService.service';

@Component({
  selector: 'app-dashboard-component',
  imports: [CommonModule],
  templateUrl: './dashboard-component.html',
  styleUrl: './dashboard-component.css',
})
export class DashboardComponent {
  user_name: string = '';
  numOfResume: number = 0;
  completedSteps: number = 0;
  Views: number = 0;

  constructor(public formService: FormServiceService, private router: Router) {
    // Retrieve the stored username from LocalStorage (set during login)
    const storedName = localStorage.getItem('userName');
    if (storedName) {
      this.user_name = storedName;
    }
    this.formService.loadResumesFromStorage();
    this.numOfResume = this.formService.resumes.length;
  }

  openResume(resumeId: number) {
    localStorage.setItem('selectedResumeId', resumeId.toString());
    this.formService.getSpecificResume(resumeId);
    this.router.navigate(['/create-cv']);
  }
  viewResume(resumeId: number) {
    this.formService.getSpecificResume(resumeId);
    this.router.navigate(['/create-cv']);
  }
  createResume() {
    const id = this.formService.createNewResume();
    this.numOfResume = this.formService.resumes.length;

    this.router.navigate(['/create-cv']);
  }

  deleteResume(resumeId: number, event: Event) {
    event.stopPropagation(); // Prevent triggering the card click event
    if (confirm('Are you sure you want to delete this resume?')) {
      const index = this.formService.resumes.findIndex(
        (r) => r.resumeId === resumeId
      );
      if (index !== -1) {
        this.formService.resumes.splice(index, 1);
        this.formService.saveResumesToStorage();
        this.numOfResume = this.formService.resumes.length;
      }
    }
  }
}
