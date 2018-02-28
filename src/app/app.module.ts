import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { NFC, Ndef } from '@ionic-native/nfc';
import { LocalNotifications } from '@ionic-native/local-notifications';

//database
import { AnimalProvider } from '../providers/animal-provider';
//import { VacunaProvider } from '../providers/vacuna-provider';
//pages
import { AnimalHome } from '../pages/animal/animal-home';
import { AnimalCreate } from '../pages/animal/animal-create';
import { AnimalInfoUnit } from '../pages/animal/animal-info-unit';
import { TratamientoAnimalInfo } from '../pages/tratamiento/tratamiento-animal-info';
import { VacunaAnimalInfo } from '../pages/vacunas/vacuna-animal-info';
import { VacunaAnimal } from '../pages/vacunas/vacuna-animal-register';
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AnimalHome,
    AnimalInfoUnit,
    TratamientoAnimalInfo,
    VacunaAnimalInfo,
    AnimalCreate,
    VacunaAnimal
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    AnimalHome,
    AnimalInfoUnit,
    TratamientoAnimalInfo,
    VacunaAnimalInfo,
    AnimalCreate,
    VacunaAnimal
  ],
  providers: [
    Camera,
    NFC,
    Ndef,
    StatusBar,
    SplashScreen,
    LocalNotifications,
    {provide: ErrorHandler, useClass: IonicErrorHandler}, AnimalProvider
  ]
})
export class AppModule {}
