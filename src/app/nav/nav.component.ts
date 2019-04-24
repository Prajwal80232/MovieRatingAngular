import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../shared/user.service';
import {
  AuthService,
  FacebookLoginProvider,
  GoogleLoginProvider,
  LinkedinLoginProvider
} from 'angular-6-social-login';

@Component({
  selector: 'nav-bar',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  userClaims: any;

  constructor(private router: Router, private userService: UserService,private socialAuthService: AuthService) { }


  ngOnInit() {
    this.userService.getUserClaims().subscribe((data: any) => {
      this.userClaims = data;
     
    });
  }

  Logout() {
    this.socialAuthService.signOut;
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}
