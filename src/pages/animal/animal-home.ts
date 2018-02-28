import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { AnimalProvider } from '../../providers/animal-provider';
import { AnimalInfoUnit } from './animal-info-unit';
import { AnimalCreate } from './animal-create';

@Component({
    selector: 'page-animal-home',
    templateUrl: 'animal-home.html'
})
export class AnimalHome {
    animalList: any;
    animalListOriginal:any;

    constructor(public navCtrl: NavController, public animalProvider: AnimalProvider,
        public navParams: NavParams, public loading: LoadingController) {
    }

    ionViewDidLoad() {
        let loader = this.loading.create({
            content: 'Cargando espere por favor...',
        });
        loader.present().then(() => {
            this.animalProvider.getAnimal().then((data) => {
                this.animalList = data;
                this.animalListOriginal = data;
                loader.dismiss();
            }).catch(error => {
                loader.dismiss();
                alert("Failed to load!");
            });
        });
    }

    initializeItems() {
        this.animalList = this.animalListOriginal;
    }

    getItems(ev) {
        // Reset items back to all of the items
        this.initializeItems();
    
        // set val to the value of the ev target
        var val = ev.target.value;
    
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
          this.animalList = this.animalList.filter((item) => {
            return (item.nombre.toLowerCase().indexOf(val.toLowerCase()) > -1);
          })
        }
      }

    informationAnimal(data) {
        this.navCtrl.push(AnimalInfoUnit, { animal: data });
    }

    goToCreateAnimal() {
        this.navCtrl.push(AnimalCreate);
    }


}