import { GithubComponent } from './../github/github.component';
import { UserDetailsService } from './../github-http/user-details.service';
import { User } from './../user';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Repo } from '../repo';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  providers: [UserDetailsService],
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  
  user:User;
  repos:Repo[];
  public username:string;
  

  submitUser(){
    this.userService.update(this.username);
    this.userService.getUserInfo();
    this.userService.getRepos();
    
  }

  constructor(private userService:UserDetailsService) { 
     
  }
  
  ngOnInit() {
    this.userService.getUserInfo();
    this.user=this.userService.user;
    this.userService.getRepos();
    this.repos=this.userService.repos;
    
    
  }

}

