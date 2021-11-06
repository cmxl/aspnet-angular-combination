import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./pages/home/home.module').then(x => x.HomeModule) },
  {path: 'blog', loadChildren: () => import('./pages/blog/blog.module').then(x => x.BlogModule) },
  {path: 'login', loadChildren: () => import('./pages/login/login.module').then(x => x.LoginModule) },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
