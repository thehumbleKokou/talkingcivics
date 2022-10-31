import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartyComponent } from './party/party.component';
import { FooterComponent } from './footer/footer.component';
import { PresidentsComponent } from './presidents/presidents.component';
import { PoliticsComponent } from './politics/politics.component';
import { GovernmentComponent } from './government/government.component';
import { HomeComponent } from './home/home.component';
import { JudicialComponent } from './judicial/judicial.component';
import { ExecutiveComponent } from './executive/executive.component';
import { LegislativeComponent } from './legislative/legislative.component';
import { StateComponent } from './state/state.component';

@NgModule({
  declarations: [
    AppComponent,
    PartyComponent,
    FooterComponent,
    PresidentsComponent,
    PoliticsComponent,
    GovernmentComponent,
    HomeComponent,
    JudicialComponent,
    ExecutiveComponent,
    LegislativeComponent,
    StateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
