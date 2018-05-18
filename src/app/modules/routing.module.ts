import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { ContentListComponent } from '../components/content-list/content-list.component';
import { ContentFormAddComponent } from '../components/content-form-add/content-form-add.component';
import { ContentFormEditComponent } from '../components/content-form-edit/content-form-edit.component';

const mainRoutes: Routes = [
  { path: 'printers', component:  ContentListComponent },
  { path: 'printers/add', component:  ContentFormAddComponent },
  { path: 'printers/update/:id/:name', component:  ContentFormEditComponent },
  { path: '', redirectTo: '/printers', pathMatch: 'full'},
  { path: '**', redirectTo: '/printers', pathMatch: 'full'}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class RoutingModule { }

