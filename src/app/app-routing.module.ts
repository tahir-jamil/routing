import { NgModule } from "@angular/core";
import { NativeScriptRouterModule } from "nativescript-angular/router";
import { Routes } from "@angular/router";
import { PageOneComponent } from "./pageOne/pageOne.component";
import { PageTwoComponent } from "./pageTwo/pageTwo.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
    { path: "", redirectTo: "/dashbaord", pathMatch: "full" },
    { path: "dashbaord", component: DashboardComponent },
    { path: "pageOne", component: PageOneComponent },
    { path: "pageTwo", component: PageTwoComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forRoot(routes)],
    exports: [NativeScriptRouterModule]
})
export class AppRoutingModule { }
