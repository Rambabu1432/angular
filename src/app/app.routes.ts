import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { WebsiteComponent } from './website-component/website-component';
import { CommonModule } from '@angular/common';
import { FilterComponent } from './website-component/filter-component/filter-component';
import { HeaderComponent } from './header.component/header.component';
import { FooterComponent } from './footer.component/footer.component';
import { MiddleComponent } from './middle-component/middle-component';
import { NotFound } from './not-found/not-found';
import { HomeComponent } from './header.component/home.component/home.component';
import { AboutComponent } from './header.component/about.component/about.component';
import { ContactComponent } from './header.component/contact.component/contact.component';
import { ServicesComponent } from './header.component/services.component/services.component';
import { RouterLink } from '@angular/router';
import { EkarComponent } from './ekar.component/ekar.component';
import { ApiTesting } from './api-testing/api-testing';






export const routes: Routes = [

  {
   path:'website',
   component:WebsiteComponent
  },
  {
    path:'apitest',
    component:ApiTesting
  },
  
  {
   path:'filter',
   component:FilterComponent
  },
    {
   path:'header',
   component:HeaderComponent
  },
  {
   path:'footer',
   component:FooterComponent
  },
  {
    path:'middle',
    component:MiddleComponent
  }
  ,
  {
    path:'home',
    component:HomeComponent
  },
    {
    path:'about',
    component:AboutComponent
  },
    {
    path:'contact',
    component:ContactComponent
  },
    {
    path:'services',
    component:ServicesComponent
  },
    {
   path:'ekart',
   component:EkarComponent
  },




  


];

@NgModule({

  imports: [RouterModule.forRoot(routes),CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}

