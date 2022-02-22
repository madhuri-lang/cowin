import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { NoPageFoundComponent } from './no-page-found/no-page-found.component';
import { RegisterComponent } from './register/register.component';
import { SignupComponent } from './signup/signup.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
  {path:'' , redirectTo:"/signup", pathMatch:'full'},
  {path:'signup', component:SignupComponent},
  {path:'login',component:LoginComponent},
  {path:'user',component:UserComponent},
  {path:'register', component:RegisterComponent},
  {path:'**', component:NoPageFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
