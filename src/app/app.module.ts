import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PadreComponent } from './padre/padre.component';
import { HijoComponent } from './hijo/hijo.component';
import { FormsModule } from '@angular/forms';
import { BrotherComponent } from './brother/brother.component';
import { StyleBrotherDirective } from './style-brother.directive';
import { MyPipeUpperPipe } from './my-pipe-upper.pipe';

@NgModule({
  declarations: [AppComponent, PadreComponent, HijoComponent, BrotherComponent, StyleBrotherDirective, MyPipeUpperPipe],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  exports: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
