import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NotFoundComponent } from './notfound/notfound.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [NotFoundComponent],
  imports: [CommonModule],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    NotFoundComponent,
    RouterModule,
    ReactiveFormsModule,
  ],
})
export class SharedModule {}
