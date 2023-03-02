import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { HttpLoadingInterceptor } from "./loading.interceptor";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatProgressSpinnerModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: HttpLoadingInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
