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
import { TemplateComponent } from './views/template/template.component';
import { TemRefVarComponent } from './components/tem-ref-var/tem-ref-var.component';
import { LifecycleHooksComponent } from './views/lifecycle-hooks/lifecycle-hooks.component';
import { NgOnInitComponent } from './components/ng-on-init/ng-on-init.component';
import { NgOnInitChildComponent } from './components/ng-on-init-child/ng-on-init-child.component';
import { OtherlifecycleComponent } from './components/otherlifecycle/otherlifecycle.component';
import { OtherlifecyclechildComponent } from './components/otherlifecyclechild/otherlifecyclechild.component';
import { OtherlifecyclechildtwoComponent } from './components/otherlifecyclechildtwo/otherlifecyclechildtwo.component';
import { OtherlifecyclechildthreeComponent } from './components/otherlifecyclechildthree/otherlifecyclechildthree.component';
import { ServiceViewComponent } from './views/service-view/service-view.component';
import { FirtComponent } from './components/forServiceView/firt/firt.component';
import { SecondComponent } from './components/forServiceView/second/second.component';
import { MovieService } from './services/movie.service';

import { LoggingService } from './services/logging.service';
import { MovieViewComponent } from './views/movie-view/movie-view.component';
import { MovieListComponent } from './components/movie/movie-list/movie-list.component';
import { MovieAddEditComponent } from './components/movie/movie-add-edit/movie-add-edit.component';
import { HomeRoutingComponent } from './components/routings/home-routing/home-routing.component';
import { CurrencyvndPipe } from './pipes/currencyvnd.pipe';
import { ProductService } from './services/product.service';
import { ProductDetailComponent } from './components/routings/product-detail/product-detail.component';
import { LoginComponent } from './components/routings/login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { HomeComponent } from './components/routings/home/home.component';
import { AccessGuard } from './guards/access.guard';

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
    TemplateComponent,
    TemRefVarComponent,
    LifecycleHooksComponent,
    NgOnInitComponent,
    NgOnInitChildComponent,
    OtherlifecycleComponent,
    OtherlifecyclechildComponent,
    OtherlifecyclechildtwoComponent,
    OtherlifecyclechildthreeComponent,
    ServiceViewComponent,
    FirtComponent,
    SecondComponent,
    MovieViewComponent,
    MovieListComponent,
    MovieAddEditComponent,
    HomeRoutingComponent,
    CurrencyvndPipe,
    ProductDetailComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    LoggingService,
    MovieService,
    ProductService,
    AuthGuard,
    AccessGuard

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
