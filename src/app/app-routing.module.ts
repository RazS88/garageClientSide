import { NotfoundComponent } from './components/notfound/notfound.component';
import { ContactsComponent } from './components/contacts/contacts.component';
import { ReviewsComponent } from './components/reviews/reviews.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { BenefitComponent } from './components/benefit/benefit.component';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';

const routes: Routes = [
  {path:'home', component:HomeComponent},
  {path:'benefit', component:BenefitComponent},
  {path:'reviews', component:ReviewsComponent},
  {path:'contacts', component:ContactsComponent},
   // need lazy here
   {path:'admin', component:LoginComponent},
   {path:'resourses', component:AdminComponent},

  {path: '', pathMatch: 'full', redirectTo: '/home'},
  {path: '**'/*any things elase*/, component: NotfoundComponent},

 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
