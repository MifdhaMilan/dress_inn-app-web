import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { ViewComponent } from './view/view.component';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule, MatFormFieldModule, MatInputModule, MatButtonModule } from "@angular/material";
import { ReactiveFormsModule } from '@angular/forms';



import { MenComponent } from './add-dress/men/men.component';
import { WomenComponent } from './add-dress/women/women.component';

import { AddDressMenComponent } from './add-dress/men/add-dress-men/add-dress-men.component';
import { AddDressWomenComponent } from './add-dress/women/add-dress-women/add-dress-women.component';
import { EditDressMenComponent } from './add-dress/men/edit-dress-men/edit-dress-men.component';
import { DeleteDressMenComponent } from './add-dress/men/delete-dress-men/delete-dress-men.component';
import { DeleteDressWomenComponent } from './add-dress/women/delete-dress-women/delete-dress-women.component';
import { EditDressWomenComponent } from './add-dress/women/edit-dress-women/edit-dress-women.component';



@NgModule({
  declarations: [ 
    ViewComponent,
     MenComponent, 
     WomenComponent,
      AddDressMenComponent,
      EditDressMenComponent,
      DeleteDressMenComponent,
      AddDressWomenComponent,
      EditDressWomenComponent,
      DeleteDressWomenComponent
    ],
  entryComponents: [
    AddDressMenComponent,
      EditDressMenComponent,
      DeleteDressMenComponent,
      AddDressWomenComponent,
      EditDressWomenComponent,
      DeleteDressWomenComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    HttpClientModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
