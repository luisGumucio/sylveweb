import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';

@Component({
    selector: 'page-tratamiento-animal-info',
    templateUrl: 'tratamiento-animal-info.html'
})
export class TratamientoAnimalInfo {

    constructor(public navCtrl: NavController, public navParams: NavParams) {
    }
}