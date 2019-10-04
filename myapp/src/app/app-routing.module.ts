import { AboutUsComponent } from './component/home/about-us/about-us.component';
import { ListComponent } from './component/home/list/list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'popular', component: ListComponent },
  { path: 'serbia', component: ListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
export const routingComponents = [AppComponent];
