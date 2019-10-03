import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [AppComponent];
