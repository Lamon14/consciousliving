import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  services = [
    {
      id: 1,
      name: 'Frekvensmedicin',
      description:
        'En frekvensmedicinsk balansering rättar till och förebygger stress och obalanser. Detta startar igång kroppens självläkande förmåga med goda resultat vid stress och psykisk ohälsa.',
      image: '../../assets/fredkvensmedicin.jpg',
      link: '/frequencymedicine',
    },
    {
      id: 2,
      name: 'Personlig- och andlig utveckling',
      description:
        'Att utvecklas som människa är en spännande och utmanande resa. En förståelse för vem du verkligen är. Bli mer av dig  själv istället för en kopia av någon annan.',
      image: '../../assets/andligper.jpg',
      link: '/personalspiritual',
    },
    {
      id: 3,
      name: 'Medveten närvaro',
      description:
        'Upplev ökat fokus, sänkt stressnivå och kom i kontakt med din inre livskraft. Din hjärna kommer dessutom att älska att bara få vara i stillhet en liten stund. Ett liv i balans.',
      image: '../../assets/MedvetenNar.jpg',
      link: '/consciouspresence',
    },
    {
      id: 4,
      name: 'Naturlig kost',
      description:
        'Dagens livsstil och kost skapar stor ohälsa. Men vi kan medvetet välja naturlig kost utan kemiska tillsatser. Våra kroppar mår bäst av naturlig och näringsrik mat.',
      image: '../../assets/Naturligkost.jpg',
      link: '/naturaldiet',
    },
    {
      id: 5,
      name: 'Näringstillskott',
      description:
        'Dagens mat är över lag näringsfattig. Kanske har du inte kraft att göra en kostförändring. Då är detta ett bra alternativ för att kunna fylla på med nödvändiga näringsämnen.',
      image: '../../assets/Zinzino1.jpg',
      link: '/dietarysupplements',
    },
    {
      id: 6,
      name: 'Presentkort',
      description:
        'Köp en gåva till en vän. Presentkortet kan skickas per post om du önskar – till dig eller till mottagaren. Du kan köpa på plats hos mig alternativt beställa.',
      image: '../../assets/presentkort.jpg',
      link: '/giftcard',
    },
  ];
}
