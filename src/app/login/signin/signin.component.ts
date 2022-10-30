import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  loginForm:any = FormGroup;
  token: any;


  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      username:['', Validators.required],
      password: ['', Validators.compose([Validators.required, Validators.minLength(7)])]
    })
    
    this.loginForm.valueChanges.subscribe(console.log);
  }

  loginSubmit(data:any){

    console.log('clicked: ' + data);

    this.token = this.authService.proceedLogin(data).subscribe(
      data => {
        console.log('dataaa', data)
        this.token = data;
        localStorage.setItem('token', this.token.token);
      }
    )

    console.log('request ended');

    this.router.navigate(['']);

  }

  

}
