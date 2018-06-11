import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule,Router } from '@angular/router';
import { Http } from '@angular/http';


import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ContactComponent } from './contact/contact.component';
import { DiscoverComponent } from './discover/discover.component';

const routes = [
  {path:'',component:HomepageComponent},
  {path:'contact',component:ContactComponent},
  {path:'discover',component:DiscoverComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    ContactComponent,
    DiscoverComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
