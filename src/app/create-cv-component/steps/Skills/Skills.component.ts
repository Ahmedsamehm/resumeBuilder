import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormServiceService } from '../../FormService.service';
import { ExportAsModule } from 'ngx-export-as';
import { PdfExportService } from '../../PdfExportService.service';

@Component({
  selector: 'app-skills',
  imports: [CommonModule, FormsModule, ExportAsModule],
  standalone: true,
  templateUrl: './Skills.html',
  styleUrl: './Skills.component.css',
})
export class SkillsComponent {
  newSkill: string = '';

  constructor(
    public form: FormServiceService,
    private exportConfigService: PdfExportService
  ) {}

  addSkill() {
    if (this.newSkill && this.newSkill.trim()) {
      this.form.skills.push(this.newSkill.trim());
      this.newSkill = '';
    }
  }

  removeSkill(index: number) {
    this.form.skills.splice(index, 1);
  }

  // إضافة وظيفة تحميل PDF
  downloadPDF() {
    this.exportConfigService.downloadById('pdf-content', 'my-resume.pdf');
  }
}
