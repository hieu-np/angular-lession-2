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

const routes: Routes = [
  { path: '', redirectTo: 'pipe', pathMatch: 'full' },
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
  { path: '**', redirectTo: 'pipe', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
