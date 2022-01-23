import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  model: any = {}
  loggedIn: boolean;
  constructor(private accountservice: AccountService) { } //injecting service inside the component

  ngOnInit(): void {
    this.getCurrentUser();
  }

  login() {
    this.accountservice.login(this.model).subscribe(response => {
      console.log(response);
      this.loggedIn = true;
    }, error => {
      console.log(console.error());
    });
  }

  logout() {
    this.accountservice.logout();
    this.loggedIn = false;
  }

  getCurrentUser() {
    this.accountservice.currentUser$.subscribe(user => {
      this.loggedIn = !!user;
    }, error => {
      console.log(error);
    })
  }
}
