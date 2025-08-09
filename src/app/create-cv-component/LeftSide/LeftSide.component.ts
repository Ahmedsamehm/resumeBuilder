import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalInfoComponent } from '../steps/PersonalInfo/PersonalInfo.component';
import { WorkExperienceComponent } from '../steps/WorkExperience/WorkExperience.component';
import { EducationComponent } from '../steps/Education/Education.component';
import { SkillsComponent } from '../steps/Skills/Skills.component';
import { FormServiceService } from '../FormService.service';

@Component({
  selector: 'app-left-side',
  standalone: true,
  imports: [
    CommonModule,
    PersonalInfoComponent,
    WorkExperienceComponent,
    EducationComponent,
    SkillsComponent,
  ],
  templateUrl: './LeftSide.html',
  styleUrl: './LeftSide.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LeftComponent {
  constructor(public form: FormServiceService) {}

  saveCurrentResume() {
    const currentResumeId =
      this.form.resumes[this.form.resumes.length - 1]?.resumeId;
    const index = this.form.resumes.findIndex(
      (r) => r.resumeId === currentResumeId
    );

    if (index !== -1) {
      this.form.resumes[index] = {
        resumeId: currentResumeId,
        personalInformation: { ...this.form.personalInformation },
        workExperiences: [...this.form.workExperiences],
        education: { ...this.form.education },
        skills: [...this.form.skills],
      };
      this.form.saveResumesToStorage();
    }
  }
}
