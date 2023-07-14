import { Component } from '@angular/core';
import { CommonService } from '../common.service';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm:any
constructor(private commonservice:CommonService,private messageService:MessageService,private router:Router){}

ngOnInit() {
// this.getData();
this.registrationForm = new FormGroup({
  fullName: new FormControl('',[Validators.required]),
  email: new FormControl('',[Validators.required,Validators.email]),
  userName: new FormControl('',[Validators.required]),
  password: new FormControl('',[Validators.required]),
  repeatPassword: new FormControl('',[Validators.required]),
  checkbox: new FormControl('',[Validators.required]),
});
}

submitRegistrationData(){
  console.log(this.registrationForm.value)
  if(this.registrationForm.valid){
    if(this.registrationForm.controls['password'].value === this.registrationForm.controls['repeatPassword'].value){
  this.commonservice.registartionAPI(this.registrationForm.value).subscribe((data:any)=>{
    console.log(data);
    if(data=='results'){
        this.messageService.add({severity:'success', summary: 'Success', detail: 'Sucessfully registartion'});
this.router.navigate(['home'])
    }else{
      this.messageService.add({severity:'warn', summary: 'failed', detail: 'Failed server error'});

    }
 
    
  })
}else{
  this.messageService.add({severity:'warn', summary: 'password repeat Password is mismatch', detail: 'Failed'})
}
}else{
  this.messageService.add({severity:'warn', summary: 'Form is not valid', detail: 'Failed'})
}

}
}
  

