import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { SlidesComponent } from './tutorial/slides/slides.component';
import { SettingsComponent } from './tutorial/settings/settings.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'tutorial/slides',
    component: SlidesComponent
  },
  {
    path: 'tutorial/settings',
    component: SettingsComponent
  },
  {
    path: '',
    redirectTo: 'tutorial/slides',
    pathMatch: 'full'
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
