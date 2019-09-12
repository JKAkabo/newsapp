import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  login(form) {
    this.authService.login(form.value).subscribe((res)=>{
      console.log('logged in');
    });
  }
  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

}
