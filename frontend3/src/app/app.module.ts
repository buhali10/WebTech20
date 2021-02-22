import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './members/create/create.component';
import { ReadComponent } from './members/read/read.component';
import { UpdateComponent } from './members/update/update.component';
import { DeleteComponent } from './members/delete/delete.component';
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import { pencilSquare, trash } from 'ngx-bootstrap-icons';
import { FormComponent } from './members/read/form/form.component';
import {ReactiveFormsModule} from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

const icons = {
  pencilSquare,
  trash,
};

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxBootstrapIconsModule.forRoot(icons),
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
