import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./pages/login/login.module').then((m) => m.LoginPageModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomePageModule),
  },
  {
    path: 'summary',
    loadChildren: () =>
      import('./pages/summary/summary.module').then((m) => m.SummaryPageModule),
  },
  {
    path: 'order',
    loadChildren: () =>
      import('./pages/order/order.module').then((m) => m.OrderPageModule),
  },
  {
    path: 'order-show/:orderId',
    loadChildren: () =>
      import('./pages/order-show/order-show.module').then(
        (m) => m.OrderShowPageModule
      ),
  },
  {
    path: 'order-add',
    loadChildren: () => import('./pages/order-add/order-add.module').then( m => m.OrderAddPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
