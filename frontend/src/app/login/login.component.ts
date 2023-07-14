import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { CommonService } from '../common.service';
import {FormGroup, FormControl, Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm:any
  constructor(private commonservice:CommonService,private messageService:MessageService, private router:Router){

  }

  ngOnInit() {
    // this.getData();
    this.loginForm = new FormGroup({
      
      email: new FormControl('',[Validators.required,Validators.email]),
      
      password: new FormControl('',[Validators.required]),
     
    });
    }

    submitLoginData(){
      console.log(this.loginForm.value)
      if(this.loginForm.valid){
      this.commonservice.loginAPI(this.loginForm.value).subscribe((data:any)=>{
        console.log(data);
        if(data.length>0){
          this.messageService.add({severity:'success', summary: 'Success', detail: 'Sucessfully login'});
          this.router.navigate(['home'])
        }else{
          this.messageService.add({severity:'warn', summary: 'failed', detail: 'Failed'});
  
        }
     
        
      })
    }else[
      this.messageService.add({severity:'warn', summary: 'Form is not valid', detail: 'Failed'}) 
    ]
    }
}
