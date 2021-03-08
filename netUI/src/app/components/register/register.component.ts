import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  Roles: string[] = ['Admin', 'User'];

  constructor() { }

  ngOnInit(): void {
  }

}
