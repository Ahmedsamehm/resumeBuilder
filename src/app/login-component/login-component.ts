import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-component',
  imports: [FormsModule],
  templateUrl: './login-component.html',
  styleUrl: './login-component.css',
})
export class LoginComponent {
  userName: string = '';

  constructor(private router: Router) {}

  login() {
    if (this.userName.trim()) {
      localStorage.setItem('userName', this.userName);
      this.router.navigate(['/']);
    }
  }
}
