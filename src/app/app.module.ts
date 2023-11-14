import { AppRoutingModule } from './../../../myApp/src/app/app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from '../app/app.component';
import { AirlinesListComponent } from './airlines-list/airlines-list.component';
import { HttpClientModule } from '@angular/common/http';
import { BookTicketComponent } from './book-ticket/book-ticket.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';
import { InfyAirlinesService } from './infy-airlines.service';
@NgModule({
  declarations: [AirlinesListComponent, BookTicketComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AppRoutingModule,
  ],
  providers: [InfyAirlinesService],
  bootstrap: [],
})
export class AppModule {}
