import { HttpClient } from '@angular/common/http';
import { computed, inject, Injectable, signal } from '@angular/core';
import { environment } from '../../../environments/environment';
import { GlobalConstant } from '../contants/globalconstant';
import { UserLogin, UserModel } from '../models/classes/user.model';
import { Observable } from 'rxjs';
import { ApiResponse, LoginResponse } from '../models/interface/api.response';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  http = inject(HttpClient)
  router = inject(Router)

  constructor() { }

   currentUser = signal<any>(
    JSON.parse(localStorage.getItem('Farmerdata') || 'null')
  );

  isLogin = computed(()=> !!this.currentUser())

  Login(obj: UserLogin) : Observable<LoginResponse>{ 
    return this.http.post<LoginResponse>(environment.API_URL+GlobalConstant.LOGIN , obj)
  }

  Logout(){
    localStorage.removeItem('Farmerdata')
    this.router.navigateByUrl('/login')
    this.currentUser.set(null);
  }

  Register(obj:UserModel) : Observable<ApiResponse>{
    return this.http.post<ApiResponse>(environment.API_URL+GlobalConstant.CREATE_USER, obj)
  }
}
