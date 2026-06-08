import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router'; 
import { LoginService } from '../../core/services/login-service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
loginSrv = inject(LoginService)

 

onlogout(){
  this.loginSrv.Logout();
}
}
