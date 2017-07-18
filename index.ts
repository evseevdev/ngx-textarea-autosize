import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AutosizeDirective } from './autosize.directive';

export * from "./autosize.directive";

@NgModule({
  imports: [ CommonModule ],
  declarations: [ AutosizeDirective ],
  exports: [ AutosizeDirective ]
})
export class TextareaAutosizeModule {}