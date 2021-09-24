import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import { ImageModule } from '@mr/image';
import { ButtonModule } from '@mr/button';
import { InputModule } from '@mr/input';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    // ImageModule,
    ButtonModule,
    InputModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
