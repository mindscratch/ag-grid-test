import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IframeComponent } from './iframe/iframe.component';

const routes: Routes = [
  // use this to set a default page if no path is set in the URL
  // { path: '', redirectTo: '/dashboards', pathMatch: 'full' },
  {
    path: 'dashboards',
    component: IframeComponent,
    data: { src: 'http://localhost/app/dashboard.php' },
  },
];

@NgModule({
  // use hash routing because the app will be loaded via PHP
  // https://angular.io/guide/router#hashlocationstrategy
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
