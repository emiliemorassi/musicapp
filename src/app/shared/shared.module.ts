import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NotFoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';
import { DialogComponent } from './dialog/dialog.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [NotFoundComponent, DialogComponent],
  imports: [CommonModule, MatDialogModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NotFoundComponent,
    DialogComponent,
    RouterModule,
  ],
})
export class SharedModule {}
