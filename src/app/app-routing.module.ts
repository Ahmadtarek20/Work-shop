import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewsModule } from './modules/news/news.module';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./modules/home/home.module').then((m) => m.HomeModule) },
  { path: 'news', loadChildren: () => import('./modules/news/news.module').then((m) => m.NewsModule) },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
