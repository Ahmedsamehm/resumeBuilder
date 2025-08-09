import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FormServiceService } from './FormService.service';
import { LeftComponent } from './LeftSide/LeftSide.component';
import { RightSideComponent } from './RightSide/RightSide.component';
import { ExportAsConfig, ExportAsModule, ExportAsService } from 'ngx-export-as';
import { PdfExportService } from './PdfExportService.service';

@Component({
  imports: [
    CommonModule,
    LeftComponent,
    FormsModule,
    RightSideComponent,
    ExportAsModule,
  ],
  templateUrl: './create-cv-component.html',
  styleUrl: './create-cv-component.css',
})
export class CreateCvComponent implements OnInit {
  constructor(public form: FormServiceService) {}

  ngOnInit() {
    this.form.loadResumesFromStorage();
    const id = localStorage.getItem('selectedResumeId');
    if (id) {
      this.form.getSpecificResume(Number(id));
    }
  }
}
