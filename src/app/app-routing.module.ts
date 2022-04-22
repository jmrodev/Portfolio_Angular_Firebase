import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartSessionComponent } from './components/start-session/start-session.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  { path: 'login', component: StartSessionComponent },
  { path: '**', component: HomeComponent },
  

 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
