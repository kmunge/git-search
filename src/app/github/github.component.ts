import { UserDetailsService } from './../github-http/user-details.service';
import { Repo } from './../repo';
import { User } from './../user';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-github',
  templateUrl: './github.component.html',
  providers: [UserDetailsService],
  styleUrls: ['./github.component.css']
})
export class GithubComponent implements OnInit {

   
  user:User;
  public newUser:string;
  changeUser = "";
  users =[];


  constructor(private http:HttpClient, private userService:UserDetailsService) { 
     
  }

  ngOnInit() {
  
    this.user=this.userService.user
  
   
    }
  }
