import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, OnInit, signal } from '@angular/core';
import { MasterService } from '../../core/services/master-service';
import { ApiResponse, IRole } from '../../core/models/interface/api.response';
import { CommonModule, JsonPipe, NgIf } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../../core/services/login-service';
import { CustomValidators } from '../../shared/password-match-validator';

@Component({
  selector: 'app-register',
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './register.html',
  styleUrl: './register.scss', 
})
export class Register implements OnInit {
loginSrv = inject(LoginService)

  RolseList = signal<IRole[]>([])
  isRegistering = signal(false);

  constructor(){
    this.getRoles();

  }

  registerForm : FormGroup = new FormGroup({
    name : new FormControl('',Validators.required),
    email : new FormControl('',[Validators.required, Validators.email]),
    phone : new FormControl('',Validators.required),
    password : new FormControl('', [Validators.required, CustomValidators.PasswordMatchValidator]),
    confirmPassword : new FormControl('',[Validators.required , CustomValidators.PasswordMatchValidator]),
    roleId : new FormControl('' ,Validators.required),
    address : new FormControl('',Validators.required),
    city : new FormControl('',Validators.required),
  }, {validators: CustomValidators.PasswordMatchValidator}

)
  ngOnInit(): void {
    console.log(this.RolseList);

  }


  masterSrv = inject(MasterService)
  getRoles(){
    this.masterSrv.getAllRoles().subscribe({
      next:(res:IRole[])=>{
        console.log("All roles ",res);
        this.RolseList.set(res);

      },
      error:(error:any)=>{
        console.log("Error fetching roles ",error);
      }
    })
  }

  onRegister(){
    if(this.registerForm.invalid){
      alert("Please fill all required fields correctly.");

    }
    this.isRegistering.set(true);
    this.loginSrv.Register(this.registerForm.value).subscribe({
      next: (res:ApiResponse)=> {
        console.log(this.registerForm.value)
        alert(res.message)
        this.registerForm.reset();  
        this.isRegistering.set(false);

      },
      error: (error:any)=>{
        console.log(this.registerForm)
        this.isRegistering.set(false);
        alert(error.message || "Registration failed. Please try again.")
        console.log("Registration error:", error.error.message);
        console.log("Registration error:", error.data.message);
      }
    })
  }

 
}
