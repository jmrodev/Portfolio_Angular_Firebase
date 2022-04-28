import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartSessionComponent } from './components/start-session/start-session.component';
import { HomeComponent } from './components/home/home.component';


const routes: Routes = [
  { path: 'start-session', component: StartSessionComponent },
  { path: 'home', component: HomeComponent },
  { path:'**',pathMatch:'full',redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
