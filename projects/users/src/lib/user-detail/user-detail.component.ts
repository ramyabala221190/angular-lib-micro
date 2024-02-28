import { Component } from '@angular/core';
import { UsersService } from '../users.service';
import { Observable, mergeMap } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  constructor(private activeRoute:ActivatedRoute,private userService:UsersService){}

  userDetail$:Observable<any>|undefined;

  ngOnInit(){
    this.userDetail$=this.activeRoute.paramMap.pipe(
      mergeMap((params:any)=>{
      console.log(params.get('id'));
      return this.userService.fetchUserDetail(params.get('id'))
    }))
  }
}
