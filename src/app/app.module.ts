import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { FrequencymedicineComponent } from './frequencymedicine/frequencymedicine.component';
import { PersonalspiritualComponent } from './personalspiritual/personalspiritual.component';
import { NaturaldietComponent } from './naturaldiet/naturaldiet.component';
import { ServicesComponent } from './services/services.component';
import { DietarysupplementsComponent } from './dietarysupplements/dietarysupplements.component';
import { ConsciouspresenceComponent } from './consciouspresence/consciouspresence.component';
import { FooterComponent } from './footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { GiftcardComponent } from './giftcard/giftcard.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactsComponent,
    AboutComponent,
    FrequencymedicineComponent,
    PersonalspiritualComponent,
    NaturaldietComponent,
    ServicesComponent,
    DietarysupplementsComponent,
    ConsciouspresenceComponent,
    FooterComponent,
    GiftcardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
