import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  home = [
    {
      id: 1,
      name: 'Varmt välkommen till Conscious Living',
      description:
        'Jag vänder mig till dig som är intresserad av en helhetssyn på din hälsa, naturlig läkning från grunden (i stället för symtomlindring med läkemedel) och till dig som vill få förståelse för vad din kropp och själ behöver. Och till dig som vill undersöka om din nuvarande livstil är hållbar i längden.',
      link: '/about',
    },

    {
      id: 2,
      name: '',
      image: '',
      description:
        'Den bästa investering du kan göra är i din egen hälsa och välmående',
      link: '/contacts',
    },
  ];
}
