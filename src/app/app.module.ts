import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { TextareaAutosizeModule } from '@ngx-textarea-autosize';

import { AppComponent } from './app.component';

@NgModule({
  imports: [BrowserModule, TextareaAutosizeModule, FormsModule],
  declarations: [AppComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
