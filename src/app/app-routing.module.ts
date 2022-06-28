import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PipeComponent } from './components/pipe/pipe.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { SortComponent } from './components/custom-pipe/sort/sort.component';
import { SortTableComponent } from './components/custom-pipe/sort-table/sort-table.component';


const routes: Routes = [
  { path: '', redirectTo: 'pipe', pathMatch: 'full' },
  { path: 'pipe', component: PipeComponent },
  { path: 'custompipe', component: CustomPipeComponent },
  { path: 'sort', component: SortComponent },
  { path: 'sorttable', component: SortTableComponent },
  { path: '**', redirectTo: 'pipe', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
