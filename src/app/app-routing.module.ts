import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ConsciouspresenceComponent } from './consciouspresence/consciouspresence.component';
import { ContactsComponent } from './contacts/contacts.component';
import { DietarysupplementsComponent } from './dietarysupplements/dietarysupplements.component';
import { FrequencymedicineComponent } from './frequencymedicine/frequencymedicine.component';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { HomeComponent } from './home/home.component';
import { NaturaldietComponent } from './naturaldiet/naturaldiet.component';
import { PersonalspiritualComponent } from './personalspiritual/personalspiritual.component';
import { ServicesComponent } from './services/services.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'frequencymedicine', component: FrequencymedicineComponent },
  { path: 'personalspiritual', component: PersonalspiritualComponent },
  { path: 'consciouspresence', component: ConsciouspresenceComponent },
  { path: 'naturaldiet', component: NaturaldietComponent },
  { path: 'dietarysupplements', component: DietarysupplementsComponent },
  { path: 'giftcard', component: GiftcardComponent },
  { path: 'contacts', component: ContactsComponent },
  { path: 'services', component: ServicesComponent },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
