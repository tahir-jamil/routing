import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CustomRouteReuseStrategy } from './custom-router-strategy';
import { RouteReuseStrategy } from "@angular/router";

// Uncomment and add to NgModule imports if you need to use two-way binding
// import { NativeScriptFormsModule } from "nativescript-angular/forms";

// Uncomment and add to NgModule imports if you need to use the HttpClient wrapper
// import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { PageOneComponent } from './pageOne/pageOne.component';
import { PageTwoComponent } from './pageTwo/pageTwo.component';
import { DashboardComponent } from "./dashboard/dashboard.component";

@NgModule({
    bootstrap: [
        AppComponent
    ],
    imports: [
        NativeScriptModule,
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        PageOneComponent,
        PageTwoComponent,
        DashboardComponent
    ],
    providers: [
        { provide: RouteReuseStrategy, useClass: CustomRouteReuseStrategy }
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
/*
Pass your application module to the bootstrapModule function located in main.ts to start your app
*/
export class AppModule { }
