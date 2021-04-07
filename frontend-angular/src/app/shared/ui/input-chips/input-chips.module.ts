import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputChipsComponent } from './input-chips/input-chips.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [InputChipsComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [InputChipsComponent]
})
export class InputChipsModule { }
