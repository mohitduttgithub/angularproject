import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService } from 'primeng/api';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userdata: any
  displaymodal: boolean = false
  registrationForm: any
  constructor(private commonservice: CommonService, private confirmationService: ConfirmationService, private messageService: MessageService, private router: Router) { }

  ngOnInit() {
    this.usersdata()

    this.registrationForm = new FormGroup({
      fullName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      userName: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      repeatPassword: new FormControl('', [Validators.required]),
      checkbox: new FormControl('', [Validators.required]),
      id: new FormControl()
    });
  }

  usersdata() {
    this.commonservice.usersAPI().subscribe((data: any) => {
      this.userdata = data;
      console.log(data)
    })
  }

  showDialog(product: any) {
    this.displaymodal = true
    this.registrationForm.patchValue(product)
    console.log(this.registrationForm.value, product);
  }

  updateUsers() {

    if (this.registrationForm.valid) {
      if (this.registrationForm.controls['password'].value === this.registrationForm.controls['repeatPassword'].value) {
        this.commonservice.updateUser(this.registrationForm.value).subscribe((data: any) => {
          console.log(data);
          if (data == 'results') {
            this.usersdata()
            this.displaymodal = false;
            this.registrationForm.reset();
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Updated Successfully' });
            // this.router.navigate(['home'])
          } else {
            this.messageService.add({ severity: 'warn', summary: 'failed', detail: 'Failed server error' });

          }


        })
      } else {
        this.messageService.add({ severity: 'warn', summary: 'password repeat Password is mismatch', detail: 'Failed' })
      }
    } else {
      this.messageService.add({ severity: 'warn', summary: 'Form is not valid', detail: 'Failed' })
    }
  }


  confirm(product: any) {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      header: 'Confirmation',
      icon: 'pi pi-exclamation-triangle',
      accept: () => {
        this.commonservice.deleteUser(product.id).subscribe((data: any) => {
          if(data == 'delete') {
            this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Deleted Successfully' });
            this.usersdata()
          } else {
            this.messageService.add({ severity: 'warn', summary: 'failed', detail: 'Failed server error' });

          }
        })
      }
    });
  }
}


