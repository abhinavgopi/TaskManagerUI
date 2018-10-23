import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AddComponent } from './ui/add/add.component';
import { ViewComponent } from './ui/view/view.component';
import { UpdateComponent } from './ui/update/update.component';
import { FilterPipe } from './pipes/filter.pipe';
import { SharedService } from 'src/app/services/shared.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  { path: 'add', component: AddComponent },
  { path: 'view', component: ViewComponent },
  { path: 'update/:taskid', component: UpdateComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    ViewComponent,
    UpdateComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
