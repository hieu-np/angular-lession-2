import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { CustomPipeComponent } from './components/custom-pipe/custom-pipe.component';
import { FormatDataPipe } from './pipes/format-data.pipe';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './pipes/filter.pipe';
import { SortComponent } from './components/custom-pipe/sort/sort.component';
import { SortNumberPipe } from './pipes/sort-number.pipe';
import { CapitalizePipe } from './pipes/capitalize.pipe';
import { SortTableComponent } from './components/custom-pipe/sort-table/sort-table.component';
import { SorttablePipe } from './pipes/sorttable.pipe';

@NgModule({
  declarations: [
    AppComponent,
    PipeComponent,
    CustomPipeComponent,
    FormatDataPipe,
    FilterPipe,
    SortComponent,
    SortNumberPipe,
    CapitalizePipe,
    SortTableComponent,
    SorttablePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
