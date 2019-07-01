import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NetworkService {

  constructor(
    public http: HttpClient,
    private toastr: ToastrService
  ) { }

  post(url: string, data: any): Observable<any> {
    return this.http.post(url, data);
  }
}
