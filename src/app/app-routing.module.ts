import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartSessionComponent } from './components/start-session/start-session.component';

const routes: Routes = [
  { path: '', component: StartSessionComponent },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
