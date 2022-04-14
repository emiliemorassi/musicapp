import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
import firebase from 'firebase/compat/app';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private authState: boolean = false;

  constructor(
    private router: Router,
    public authentification: AngularFireAuth
  ) {
    this.authentification.onAuthStateChanged((user) => {
      if (user) {
        this.authState = true;
      } else {
        this.authState = false;
      }
    });
  }

  auth(email: string, password: string): Promise<any> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  logout() {
    this.authentification.signOut().then(() => {
      this.router.navigate(['/albums'], {
        queryParams: { message: `Success logout` },
      });
    });
  }

  authentificated(): boolean {
    return this.authState == true;
  }
}
