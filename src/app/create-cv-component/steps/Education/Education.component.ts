import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormServiceService } from '../../FormService.service';

@Component({
  selector: 'app-education',
  imports: [CommonModule, FormsModule],
  templateUrl: `./Education.html`,
  styleUrl: './Education.component.css',
})
export class EducationComponent {
  constructor(public form: FormServiceService) {}
}
