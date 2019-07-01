import { Component, OnInit } from '@angular/core';
import { NetworkService} from '../services/network.service';
import {urls} from '../../constants/contants';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(
    private networkService: NetworkService,
    private toast: ToastrService
  ) { }

  ngOnInit() {
  }

  register(data) {
    const userParam = {
      firstname: data.firstname,
      lastname: data.lastname,
      email: data.email,
      passwordHash: data.password1
    };

    this.networkService.post(urls.REGISTER_USER, {
      data: userParam
    }).subscribe(
      (resp) => {
        // this.fetchUser();
        console.log(resp);
      },
      (error) => {
        this.toast.error(error.error.message, 'Error');
        console.log(error);
      }
    );
  }

}
