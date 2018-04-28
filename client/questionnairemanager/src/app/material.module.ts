import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from "@angular/material";
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  imports: [MatButtonModule, MatToolbarModule, MatTabsModule, MatCardModule, MatFormFieldModule, MatSelectModule,
    MatInputModule, MatDatepickerModule, MatNativeDateModule, MatGridListModule, MatExpansionModule, MatListModule,
    MatIconModule, MatTableModule
  
],
  exports: [MatButtonModule, MatToolbarModule, MatTabsModule, MatCardModule, MatFormFieldModule, MatSelectModule,
    MatInputModule, MatDatepickerModule, MatNativeDateModule, MatGridListModule, MatExpansionModule, MatListModule,
    MatIconModule, MatTableModule

],
})
export class MaterialModule { }