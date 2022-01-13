import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { HeaderComponent } from './header/header.component';
import { VeiwDetailsComponent } from './veiw-details/veiw-details.component';
import { GridComponentComponent } from './reuseable_grid_component/grid-component.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from  '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    ProgressBarComponent,
    HeaderComponent,
    VeiwDetailsComponent,
    GridComponentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
