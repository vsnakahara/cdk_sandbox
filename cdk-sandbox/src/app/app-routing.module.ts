import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommerceComponent } from "./components/commerce/commerce.component";
import { HomeComponent } from "./components/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "commerce",
    component: CommerceComponent,
  },
  // { path: "second-component", component: SecondComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: "legacy" })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
