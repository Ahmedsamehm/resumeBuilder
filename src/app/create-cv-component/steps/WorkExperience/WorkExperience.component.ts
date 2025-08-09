import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FormServiceService } from '../../FormService.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-work-experience',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './WorkExperience.html',
  styleUrl: './WorkExperience.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WorkExperienceComponent {
  // Current form data for input
  currentExperience = {
    jobTitle: '',
    company: '',
    location: '',
    Date: '',
    projectDetails: '',
  };

  constructor(public form: FormServiceService) {}

  addExperience() {
    // Check if current form has data
    if (this.currentExperience.jobTitle || this.currentExperience.company) {
      // Add current experience to the list
      this.form.workExperiences.push({ ...this.currentExperience });
    }

    // Clear the form for new input
    this.currentExperience = {
      jobTitle: '',
      company: '',
      location: '',
      Date: '',
      projectDetails: '',
    };
  }

  removeExperience(index: number) {
    this.form.workExperiences.splice(index, 1);
  }
}
