import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';

import { SidebarComponent } from './sidebar/sidebar.component';





@NgModule({
  declarations: [
    SidebarComponent
  ],
  exports : [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    RouterModule//importar para que funcionen las rutas internas
  ]
})
export class SharedModule { }
