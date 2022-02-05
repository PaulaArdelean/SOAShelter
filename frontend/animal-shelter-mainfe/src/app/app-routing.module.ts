import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppLayoutComponent } from './layouts/app-layout/app-layout.component';
import { EmptyLayoutComponent } from './layouts/empty/empty-layout.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'
  },
  {
    path:'authentication',
    component: EmptyLayoutComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('mfe2/AuthenticationModule').then(a => a.AuthenticationModule)
      }
    ]
  },
  {
    path:'home',
    component: AppLayoutComponent,
    children: [
      {
        path:'',
        loadChildren: () => import('mfe1/HomeModule').then(h => h.HomeModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
