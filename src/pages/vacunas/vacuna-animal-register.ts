import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AlertController } from 'ionic-angular';
import { AnimalProvider } from '../../providers/animal-provider';
//import { AnimalPage } from '../animal/animal';
import { LocalNotifications } from '@ionic-native/local-notifications';

@Component({
    selector: 'page-vacuna-animal-register',
    templateUrl: 'vacuna-animal-register.html'
})
export class VacunaAnimal {
    formVacuna: FormGroup;
    todo = {};
    todos: any;
    private animal:any;
    constructor(public navCtrl: NavController, public todoService: AnimalProvider, public alertCtrl: AlertController,
        public formBuilder: FormBuilder, public localNotifications: LocalNotifications,
        public navParams: NavParams) {
        this.animal = this.navParams.get('animal');
        if(this.animal != null) {
            this.formVacuna = formBuilder.group({
                'codigoAnimal': [this.animal.codigo, Validators.required],
                'codigoVacuna': ['', Validators.required],
                'cantidad': ['', Validators.required],
                'via': ['', Validators.required],
                'observaciones': ['', Validators.required]
            });
        } else {
            this.formVacuna = formBuilder.group({
                'codigoAnimal': ['', Validators.required],
                'codigoVacuna': ['', Validators.required],
                'cantidad': ['', Validators.required],
                'via': ['', Validators.required],
                'observaciones': ['', Validators.required]
            });
        }

    }

    createVacuna(vacunaModel) {
        vacunaModel.value.keyAlimentacion = "vacuna";
        var vacuna;
        this.todoService.getVacunaByRegisters(vacunaModel.value.codigoVacuna).then((data) => {
            vacuna = data[0];
            if(vacuna.cantidad >= 1) {
                this.localNotifications.schedule({
                    id: 1,
                    title: 'Local ILocalNotification Example',
                    text: 'Multi ILocalNotification 2',
                  });
            }
            vacuna.cantidad = vacuna.cantidad - vacunaModel.value.cantidad;
            //this.todoService.createTodo(vacunaModel.value);
            this.todoService.updateTodo(vacuna);
            //this.navCtrl.push(AnimalPage)
        });

    }

}
