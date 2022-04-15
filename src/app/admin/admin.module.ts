import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GuardService } from '../shared/services/guard.service';
import { NotFoundError } from 'rxjs';

@NgModule({
  declarations: [LoginComponent, DashboardComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([
      {
        path: '',
        component: DashboardComponent,
      },
      // { path: '**', component: NotFoundError },
    ]),
  ],
  exports: [LoginComponent, DashboardComponent],
})
export class AdminModule {}
