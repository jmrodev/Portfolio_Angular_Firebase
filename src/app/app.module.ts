import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MainComponent } from './components/main/main.component';
import { AsideComponent } from './components/aside/aside.component';
import { TitleComponent } from './components/title/title.component';
import { PageContentComponent } from './components/page-content/page-content.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienceAndEducationComponent } from './components/experience-and-education/experience-and-education.component';
import { StartSessionComponent } from './components/start-session/start-session.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    AsideComponent,
    TitleComponent,
    PageContentComponent,
    ExperienceAndEducationComponent,
    StartSessionComponent,
    ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
