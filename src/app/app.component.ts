import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  submitted = false;
  subscriptions = ["Basic", "Advanced", "Pro" ];
  selectedSubscription = "Advanced";
  userSubs ={
    email: "",
    subscription: "",
    password: ""
  };
  @ViewChild('f') formSub: NgForm;

  onSubmit(){
    this.userSubs.email = this.formSub.value.email;
    this.userSubs.password = this.formSub.value.password;
    this.userSubs.subscription = this.formSub.value.subs;

    this.submitted = true;
  }
}
