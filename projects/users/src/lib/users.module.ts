import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { UserListComponent } from './user-list/user-list.component';
import { CommonModule } from '@angular/common';
import { UsersContainerComponent } from './users-container/users-container.component';

export const routes:Routes=[
  {
    path:"",
    component:UsersContainerComponent,
    children:[
      {
        path:"list",
        component:UserListComponent
      },
      {
        path:"detail/:id",
        component:UserDetailComponent
      }
    ]
  }
]


@NgModule({
  declarations: [
    UsersContainerComponent,
    UserDetailComponent,
    UserListComponent,
  ],
  imports: [
    CommonModule, //dont forget to import this
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    UsersContainerComponent,
    UserDetailComponent,
    UserListComponent
  ]
})
export class UsersModule { }
