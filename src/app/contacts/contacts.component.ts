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
}
