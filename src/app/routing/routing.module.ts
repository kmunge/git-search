import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './../not-found/not-found.component';
import { UserComponent } from './../user/user.component';
import { GithubComponent } from './../github/github.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

const routes:Routes = [
  {path:"user", component:UserComponent},
  {path:"",redirectTo:"/user",pathMatch:"full"},
  {path: '**', component:NotFoundComponent}
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class RoutingModule { }
