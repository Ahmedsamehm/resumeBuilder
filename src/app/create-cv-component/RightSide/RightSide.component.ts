import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormServiceService } from '../FormService.service';
import { CommonModule } from '@angular/common';
import { ExportAsModule } from 'ngx-export-as';
import { PdfExportService } from '../PdfExportService.service';

@Component({
  selector: 'app-right-side',

  imports: [CommonModule, ExportAsModule],
  templateUrl: './RightSide.html',
  styleUrl: './RightSide.component.css',
})
export class RightSideComponent {
  @ViewChild('pdfContent') pdfContent!: ElementRef;
  constructor(
    public form: FormServiceService,
    private exportConfigService: PdfExportService
  ) {}

  ngOnInit() {
    this.form.loadResumesFromStorage();
  }
  downloadPDF() {
    this.exportConfigService.download(this.pdfContent.nativeElement);
  }

  getSpecificResume = (resumeId: number) => {
    const resume = this.form.resumes.find((r) => r.resumeId === resumeId);
    if (resume) {
      this.form.personalInformation = resume.personalInformation;
      this.form.workExperiences = resume.workExperiences;
      this.form.education = resume.education;
      this.form.skills = resume.skills;
    }
  };
}
