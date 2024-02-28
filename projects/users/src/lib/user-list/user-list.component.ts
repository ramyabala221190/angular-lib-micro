import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'lib-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent {
  usersList$:Observable<any>|undefined;

  constructor(private userService:UsersService) {}

  ngOnInit(){
    this.usersList$=this.userService.fetchUsers();
  }}
