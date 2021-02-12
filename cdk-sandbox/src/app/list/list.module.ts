import { PortalModule } from '@angular/cdk/portal';
import { ScrollingModule } from "@angular/cdk/scrolling";
import { CommonModule } from '@angular/common';
import { NgModule } from "@angular/core";
import { MatListModule } from '@angular/material/list';
import { ListRoutingModule } from "./list-routing.module";
import { ListComponent } from "./list.component";


@NgModule({
  declarations: [ListComponent], 
  imports: [
    CommonModule,
    ListRoutingModule,
    ScrollingModule,
    MatListModule,
    PortalModule,
  ],
})
export class ListModule {}
