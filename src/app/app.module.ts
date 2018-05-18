import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

/*routing*/
import { RoutingModule } from './modules/routing.module';

/* components */
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ContentComponent } from './components/content/content.component';
import { ListComponent } from './components/list/list.component';

/* services */
import { MockRestService } from './services/mock-rest.service';
import { FunctionsService } from './services/functions.service';
import { StorageService } from './services/storage.service';
import { NavigationService } from './services/navigation.service';
import { ContentListComponent } from './components/content-list/content-list.component';
import { ContentFormAddComponent } from './components/content-form-add/content-form-add.component';
import { FormComponent } from './components/form/form.component';
import { ContentFormEditComponent } from './components/content-form-edit/content-form-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ContentComponent,
    ListComponent,
    ContentListComponent,
    ContentFormAddComponent,
    FormComponent,
    ContentFormEditComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RoutingModule
  ],
  providers: [
    MockRestService,
    FunctionsService,
    StorageService,
    NavigationService
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
