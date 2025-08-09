import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormServiceService } from '../../FormService.service';

@Component({
  selector: 'app-personal-info',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './personal-info.html',
  styleUrl: './PersonalInfo.component.css',
})
export class PersonalInfoComponent {
  constructor(public form: FormServiceService) {}
}
