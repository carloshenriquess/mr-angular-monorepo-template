import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImageModule } from '@mr/image';
import { ButtonModule } from '@mr/button';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ImageModule, ButtonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
