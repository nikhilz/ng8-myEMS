import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { UserDataService } from 'src/app/core/services/user-data.service';
import { User } from 'src/app/core/models/user.model';
import { ToastService } from 'src/app/core/services/toast.service';
import { birthDateValidator } from 'src/app/core/validators/birthdate.validators';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  userform: FormGroup;
  name: String;
  password:String;
  emailId:String;
  version:String;

  constructor(private fb:FormBuilder, private router:Router, private userdataService:UserDataService,private toastService: ToastService ) { }

  ngOnInit() {
    this.userform = this.fb.group({
      'name': new FormControl('', Validators.required),
      'password': new FormControl('', Validators.compose([Validators.required,Validators.minLength(6)])),
      'emailId' : new FormControl('',[Validators.email,Validators.required]),
      'birthDate': new FormControl('', [Validators.required,birthDateValidator])
    });
    this.version = environment.version;
  }

  onClickGoToLogin() {
    this.router.navigate(['/login']);
  }

  onClickRegisterUser() {
    let isRegistered = this.userdataService.addUser(
      this.userform.controls["name"].value, 
      this.userform.controls["password"].value, 
      this.userform.controls["emailId"].value, 
      this.userform.controls["birthDate"].value, 
    ); 
    if(isRegistered){
      this.router.navigate(["/login"]);
      this.toastService.addSingle("success","","User Registered.");
    }
  }

}
