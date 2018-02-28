import { Injectable } from '@angular/core';
import PouchDB from 'pouchdb';
import PouchdbFind from 'pouchdb-find';

@Injectable()
export class AnimalProvider {
    data: any;
    db: any;
    remote: any;
    constructor() {
        PouchDB.plugin(PouchdbFind);
        this.db = new PouchDB('sylve');
        this.remote = 'http://localhost:5984/sylve';

        let options = {
            live: true,
            retry: true,
            continuous: true
        };
        this.db.sync(this.remote, options);
    }

    getVacunaByAnimal(code) {
        return new Promise(resolve => {
            this.db.find({
                selector: { keyAlimentacion: "vacuna", codigoAnimal: code, keyVacuna: "vacunaRegister" },
                fields: ["codigoAnimal", "nombre",
                    "dosis"],
                include_docs: true
            }).then((result) => {
                this.data = [];
                result.docs.map((row) => {
                    this.data.push(row);
                });
                resolve(this.data);
                this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', (change) => {
                    this.handleChange(change);
                });
            }).catch((error) => {
                console.log(error);
            });
        });
    }
    handleChange(change) {
        let changedDoc = null;
        let changedIndex = null;

        this.data.forEach((doc, index) => {
            if (doc._id === change.id) {
                changedDoc = doc;
                changedIndex = index;
            }
        });
        //A document was deleted
        if (change.deleted) {
            this.data.splice(changedIndex, 1);
        }
        else {
            //A document was updated
            if (changedDoc) {
                this.data[changedIndex] = change.doc;
            }
            //A document was added
            else {
                this.data.push(change.doc);
            }
        }
    }
}