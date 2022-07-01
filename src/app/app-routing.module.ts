import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './components/pipe/pipe.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { SortComponent } from './components/custom-pipe/sort/sort.component';
import { SortTableComponent } from './components/custom-pipe/sort-table/sort-table.component';
import { TemplateComponent } from './views/template/template.component';
import { LifecycleHooksComponent } from './views/lifecycle-hooks/lifecycle-hooks.component';
import { NgOnInitComponent } from './components/ng-on-init/ng-on-init.component';
import { OtherlifecycleComponent } from './components/otherlifecycle/otherlifecycle.component';
import { ServiceViewComponent } from './views/service-view/service-view.component';
import { MovieViewComponent } from './views/movie-view/movie-view.component';
import { HomeRoutingComponent } from './components/routings/home-routing/home-routing.component';
import { ProductDetailComponent } from './components/routings/product-detail/product-detail.component';
import { LoginComponent } from './components/routings/login/login.component';
import { HomeComponent } from './components/routings/home/home.component';
import { AuthGuard } from './guards/auth.guard';
import { AccessGuard } from './guards/access.guard';

const routes: Routes = [
  { path: '', redirectTo: 'access', pathMatch: 'full' },
  { path: 'access', canDeactivate:[AccessGuard], component: HomeComponent },
  { path: 'pipe', component: PipeComponent },
  { path: 'custompipe', component: CustomPipeComponent },
  { path: 'sort', component: SortComponent },
  { path: 'sorttable', component: SortTableComponent },
  { path: 'template', component: TemplateComponent },
  { path: 'lifecyclehooks', component: LifecycleHooksComponent },
  { path: 'lifecyclehooks/ngoninit', component: NgOnInitComponent },
  { path: 'lifecyclehooks/others', component: OtherlifecycleComponent },
  { path: 'serviceview', component: ServiceViewComponent },
  { path: 'serviceview/movie', component: MovieViewComponent },
  { path: 'homerouting', canActivate: [AuthGuard], component: HomeRoutingComponent },
  { path: 'productdetail', 
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        redirectTo: '/homerouting',
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: ProductDetailComponent
      }
    ]

  },
  { path: 'login', component: LoginComponent },
  // { path: 'homerouting', component: HomeRoutingComponent },
  // { path: 'homerouting', component: HomeRoutingComponent },
  { path: '**', redirectTo: 'access', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
