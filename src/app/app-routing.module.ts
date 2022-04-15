import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddAlbumComponent } from './admin/dashboard/add-album/add-album.component';
import { LoginComponent } from './admin/login/login.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';
import { GuardService } from './shared/services/guard.service';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    // canActivate: [GuardService],
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
    canActivate: [GuardService],
  },
  {
    path: 'albums',
    loadChildren: () =>
      import('./album/album.module').then((m) => m.AlbumModule),
    canActivate: [GuardService],
  },
  // { path: '**', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
