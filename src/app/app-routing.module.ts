import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CatalogComponent } from './components/catalog/catalog.component';
import { DetailComponent } from './components/detail/detail.component';
import { ProfileComponent } from './components/profile/profile.component';
const routes: Routes = [
  {path: 'home', component: CatalogComponent },
  {path: 'pokeDetail/:id', component: DetailComponent},
  {path: 'profile', component: ProfileComponent },
  {path: '', pathMatch: 'full', redirectTo: 'home' },
  {path: '**', pathMatch: 'full', redirectTo: 'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
