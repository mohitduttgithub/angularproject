import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url = 'http://localhost:3000/'
  constructor(private http: HttpClient) { }
  registartionAPI(formData: any) {
    return this.http.post(this.url + 'users/registrationform', formData)
  }

  loginAPI(formData: any) {
    return this.http.post(this.url + 'users/loginform', formData)
  }

  usersAPI() {
    return this.http.get(this.url + 'users/usersData')
  }

  updateUser(formData: any) {
    return this.http.post(this.url + 'users/updateUser', formData)
  }

  deleteUser(id:any){
    return this.http.post(this.url + 'users/deleteUser', {id})
  }
}

