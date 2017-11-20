import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule, MatFormFieldModule, MatIconModule, MatButtonModule } from '@angular/material';


@NgModule({
  imports: [
    CommonModule,
    MatInputModule,  
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ],
  exports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatButtonModule
  ],
  declarations: []
})
export class AngularMaterialModule { }
