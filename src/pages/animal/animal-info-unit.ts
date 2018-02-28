import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { FabContainer } from 'ionic-angular';
import { VacunaAnimalInfo } from '../vacunas/vacuna-animal-info';

@Component({
    selector: 'page-animal-info-unit',
    templateUrl: 'animal-info-unit.html'
})
export class AnimalInfoUnit {
    private animal: any;
    private fabButtonOpened: Boolean;
    constructor(public navCtrl: NavController, public navParams: NavParams) {
        this.animal = this.navParams.get('animal');
        this.fabButtonOpened = false;
    }

    Close(event, fab: FabContainer) {
        fab.close();
    }

    openFabButton() {
        if (this.fabButtonOpened == false) {
            this.fabButtonOpened = true;
        } else {
            this.fabButtonOpened = false;
        }
    }

    share(socialNet: string, fab: FabContainer) {
        switch (socialNet) {
            case "vacuna":
                this.navCtrl.push(VacunaAnimalInfo, { animal: this.animal });
                break;
            case "alimentacion":
                //this.navCtrl.push(AlimentacionInfoPage, { animal: this.animal });
                break;
            case "tratamiento":
                break;
        }
    }
}