import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextLengthPipe } from './text-length.pipe';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [TextLengthPipe],
  exports: [TextLengthPipe]
})
export class PipeModule { }
