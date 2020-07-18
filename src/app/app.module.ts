import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { BanerComponent } from './baner/baner.component';
import { HomeTabBarComponent } from './home-tab-bar/home-tab-bar.component';
import { Routes, RouterModule } from '@angular/router';
import { InventoryManagementComponent } from './home-tab-bar/inventory-management/inventory-management.component';
import { MultiOutletScalabilityComponent } from './home-tab-bar/multi-outlet-scalability/multi-outlet-scalability.component';
import { FastCloudbasedPosComponent } from './home-tab-bar/fast-cloudbased-pos/fast-cloudbased-pos.component';

const appRoutes: Routes =[
  {path: 'pos', component: FastCloudbasedPosComponent},
  {path: 'inventory', component: InventoryManagementComponent},
  {path: 'multioutlet', component: MultiOutletScalabilityComponent},
  
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BanerComponent,
    HomeTabBarComponent,
    InventoryManagementComponent,
    MultiOutletScalabilityComponent,
    FastCloudbasedPosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
