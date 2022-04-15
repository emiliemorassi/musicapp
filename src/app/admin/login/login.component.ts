import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  messageError: string = '';

  constructor(private authService: AuthService, private router: Router) {
    // if (this.authService.authentificated()) {
    //   console.log('redirection');
    //   this.router.navigate(['/dashboard'], {
    //     queryParams: { message: 'Success' },
    //   });
    // }
  }

  ngOnInit(): void {}

  onSubmit(form: NgForm): void {
    console.log(form);
    console.log(form.value);
    this.authService
      .auth(form.value['email'], form.value['password'])
      .then(() => {
        this.router.navigate(['/dashboard']);
      })
      .catch((error) => {
        this.messageError = "Erreur d'identifiant ou de mot de passe";
      });
  }
}
