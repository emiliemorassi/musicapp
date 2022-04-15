import { Injectable } from '@angular/core';
import {
  ActivatedRoute,
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from 'src/app/shared/services/auth.service';

@Injectable({
  providedIn: 'root',
})
export class GuardService {
  constructor(
    private authService: AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): any | boolean {
    if (this.authService.authentificated()) {
      console.log('login...');
      // console.log(this.activatedRoute.snapshot.url);
      // this.router.navigate(['/dashboard']);
      return true;
    }
    if (this.authService.authentificated() == false) {
      console.log('no login...');
      this.router.navigate(['']);
    }
  }
}
