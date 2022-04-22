import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-start-session',
  templateUrl: './start-session.component.html',
  styleUrls: ['./start-session.component.css'],
})
export class StartSessionComponent implements OnInit {
  form: FormGroup;
  constructor(private formBuilder: FormBuilder,  AuthenticationService: AuthenticationService ) {
console.log(AuthenticationService);
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      deviceId: ['AuthenticationService.getId()'],
      deviceType: ['AuthenticationService.getDeviceType()'],
      notificationToken: ['AuthenticationService.getToken()'],
    });
  }
  ngOnInit(): void {}

  get Email() {
    return this.form.get('email');
  }

  get Password() {
    return this.form.get('password');
  }
}
