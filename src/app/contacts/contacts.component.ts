import { Component, OnInit } from '@angular/core';

declare let Email: any;

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css'],
})
export class ContactsComponent implements OnInit {
  id!: number;
  name!: string;
  email!: string;
  phone!: string;
  subject!: string;
  message!: string;

  constructor() {}

  ngOnInit(): void {}

  /* sendEmail() {
    Email.send({
      Host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      Username: 'laminsaidy1520@gmail.com',
      Password: '#19#Combustion79',
      To: 'laminsaidy1520@gmail.com',
      From: document.getElementById('email'),
      Subject: 'This is the subject',
      Body: 'And this is the body',
    }).then((message: any) => alert(message));
  }*/
}
