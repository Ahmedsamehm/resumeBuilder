import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-component',
  imports: [RouterLink, CommonModule],
  templateUrl: './home-component.html',
  styleUrl: './home-component.css',
})
export class HomeComponent {
  heading_card1: string = 'Smart Templates';
  heading_card2: string = 'Download Format ';
  heading_card3: string = 'ATS Score';
  heading_card4: string = 'Professional Templates';

  hardSkills = ['React.js', 'JavaScript', 'Python', 'AWS', 'Docker', 'Angular'];
  midSkills = [
    'Project Management',
    'Agile',
    'Team Leadership',
    'Problem Solving',
  ];
  softSkills = ['Communication', 'Teamwork', 'Adaptability'];
}
