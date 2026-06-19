import { Component, inject } from '@angular/core';
import { LoginService } from '../../core/services/login-service';
import { FormsModule } from '@angular/forms';
import { UserLogin } from '../../core/models/classes/user.model';
import { LoginResponse } from '../../core/models/interface/api.response';
import { Router } from '@angular/router';
import { tap, timeout } from 'rxjs';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class Login {

  loginSrv = inject(LoginService)
  router = inject(Router)


  loginObj : UserLogin = new UserLogin();

  constructor() { }

  onLogin(){ 
    this.loginSrv.Login(this.loginObj).pipe(
      timeout(10000),
      tap(()=> alert("Login success - tap operator"))
    ).subscribe({
      next: (res : LoginResponse)=>{
        localStorage.setItem('Farmerdata' , JSON.stringify(res.data))
        this.loginSrv.currentUser.set(res.data);
        this.router.navigateByUrl('/home')
        alert("Login success") 
      },
      error:(error)=>{
        alert(error.error.message)
      }
    })
  }

}
