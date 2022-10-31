import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//import each page component
import { HomeComponent } from './home/home.component';
import { PoliticsComponent } from './politics/politics.component';
import { GovernmentComponent } from './government/government.component';

const routes: Routes = [
  {path: "home", component: HomeComponent},
  { path: "politics", component: PoliticsComponent},
  { path: "government", component: GovernmentComponent},
  { path: "**", component: HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
