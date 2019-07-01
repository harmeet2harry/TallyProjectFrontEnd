import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { urls } from 'src/constants/contants';
import { AuthService } from '../services/authservice.service';
import {Router} from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import {NetworkService} from '../services/network.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public http: HttpClient,
    public auth: AuthService,
    public router: Router,
    private toastr: ToastrService,
    private networkService: NetworkService
    ) { }

  ngOnInit() {
  }

  fetchUser() {
    const user = {
      'firstname' : 'harmeet3',
      'lastname': 'singh3',
      'email': 'singh.harmeet@bcg.com'
    };
    this.networkService.post(urls.CREATE_USER, {user}).subscribe(
      (resp) => {
        console.log(resp);
      }
    );
  }

  login(data) {
    console.log(data);
    const user = {
      'email': data.email,
      'passwordHash': data.password
    };
    this.networkService.post(urls.LOGIN, {
      'email': data.email,
      'password': data.password
    }).subscribe(
      (resp) => {
        this.auth.setToken(resp['token']);
        this.router.navigateByUrl('/home');
        // this.fetchUser();
        console.log(resp);
      },
      (error) => {
        this.toastr.error(error.error.message, 'Error');
        console.log(error);
      }
    );
  }

}
