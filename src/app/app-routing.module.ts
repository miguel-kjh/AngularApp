import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlacesComponent } from "./places/places.component";
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlaceDetailComponent } from "./place-detail/place-detail.component";


const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'places', component: PlacesComponent },
  { path: 'detail/:id', component: PlaceDetailComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
