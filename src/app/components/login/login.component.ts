import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  error = null;
  user;
  disableForm: boolean = false;

  constructor(private loginService: LoginService, private router: Router, private route: ActivatedRoute) {
    this.user = {username: '', password: ''};
  }

  ngOnInit() {
    let token = this.loginService.token;
    if (token) {
      this.redirectAfterLogin();
    }
  }

  login() {
    this.error = null;
    this.disableForm = true;
    this.loginService.login(this.user.username, this.user.password).then(() => {
      this.redirectAfterLogin();
    }, () => {
      this.error = `Sorry, your username/password is invalid.`;
      this.disableForm = false;
    });
  }

  redirectAfterLogin() {
    this.route.queryParams.subscribe(queryParams => {
      if (queryParams['origin']) {
        let path = decodeURIComponent(queryParams['origin'].trim());
        if (path === '/login') { // Prevent login page redirecting to itself
          this.router.navigateByUrl('/');
        } else {
          this.router.navigateByUrl(path);
        }
      } else {
        this.router.navigate(['/']);
      }
    });
  }

}
