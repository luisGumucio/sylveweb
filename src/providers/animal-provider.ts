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
    /*   this.db.createIndex({
         index: { fields: ["animal"] }
       });
   */
    this.remote = 'http://172.20.10.7:5984/sylve';

    let options = {
      live: true,
      retry: true,
      continuous: true
    };

    this.db.sync(this.remote, options);

  }
  getAnimal() {
    return new Promise(resolve => {
        this.db.find({
            selector: { indexKey: 'animal' },
            fields: ['_id', "nombre", "codigo", "edad",
                "peso", "raza", "description", "nacimiento", "genero", "_rev",
                "indexKey"],
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
  getAnimales() {
    this.db.find({
      selector: { indexKey: 'animal' },
      fields: ['_id'],
    }).then(function (result) {
      this.data = [];
      result.docs.map((row) => {
        this.data.push(row.doc);
      });

      this.db.changes({ live: true, since: 'now', include_docs: true }).on('change', (change) => {
        this.handleChange(change);
      });
    }).catch(function (err) {
      console.log(err);
    });

  }
  getTodos1() {
    return new Promise(resolve => {

      this.db.find({
        selector: { indexKey: 'animal' },
        fields: ['_id', "nombre", "codigo", "edad",
          "peso", "raza", "description", "nacimiento", "genero", "_rev", 
        "indexKey"],
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
  getAlimentacionByAnimal(code) {
    return new Promise(resolve => {

      this.db.find({
        selector: { keyAlimentacion: "alimentacion", codigo: code },
        fields: ['_id', "codigo", "nombre",
          "cantidad", "_rev"],
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
  getVacunaByAnimal(code) {
    return new Promise(resolve => {

      this.db.find({
        selector: { keyAlimentacion: "vacuna", codigoAnimal: code, keyVacuna: "vacunaRegister" },
        fields: [ "codigoAnimal", "nombre",
          "dosis"],
        include_docs: true

      }).then((result) => {

        this.data = [];

        let docs = result.docs.map((row) => {
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
  getAnimalById(code) {
    return new Promise(resolve => {

      this.db.find({
        selector: { indexKey: "animal", codigo: code },
        fields: [ "codigo", "nombre","edad","peso","raza","description","genero",
        "nacimiento","_id","_rev"],
        include_docs: true

      }).then((result) => {

        this.data = [];

        let docs = result.docs.map((row) => {
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
  getVacunaByRegister(code) {
    return new Promise(resolve => {

      this.db.find({
        selector: { keyAlimentacion: code },
        fields: ['_id', "idVacuna", "nombre",
          "fechaVencimiento", "precio", "cantidad",
          "peso", "_rev"],
        include_docs: true

      }).then((result) => {

        this.data = [];

        let docs = result.docs.map((row) => {
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
  getVacunaByRegisters(code) {
    return new Promise(resolve => {

      this.db.find({
        selector: { keyAlimentacion: "vacunaRegister", idVacuna: code },
        fields: ['_id', "idVacuna", "nombre",
          "fechaVencimiento","fechaElaboracion",
           "precio", "cantidad",
          "peso", "_rev", "keyAlimentacion"],
        include_docs: true

      }).then((result) => {

        this.data = [];

        let docs = result.docs.map((row) => {
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
  
  getTratamientos() {
    return new Promise(resolve => {

      this.db.find({
        selector: { keyTratamiento: "tratamiento"},
        fields: ['_id', "nombre", "fechaInicio",
          "fechaFin","codigo",
           "estado", "_rev", "keyTratamiento"],
        include_docs: true

      }).then((result) => {

        this.data = [];

        let docs = result.docs.map((row) => {
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

  getTodos() {

    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.db.allDocs({

        include_docs: true

      }).then((result) => {

        this.data = [];

        let docs = result.rows.map((row) => {
          this.data.push(row.doc);
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

  createAnimal(todo) {
    this.db.post(todo);
  }

  createIndex() {
    this.db.createIndex({
      index: { fields: ["animal"] }
    });
  }

  updateTodo(todo) {
    this.db.put(todo).catch((err) => {
      console.log(err);
    });
  }

  deleteTodo(todo) {
    this.db.remove(todo).catch((err) => {
      console.log(err);
    });
  }
  findAnimal() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {

      this.db.find({

        selector: { animal_key: { $gte: "animal" } }

      }).then((result) => {

        this.data = [];

         result.rows.map((row) => {
          this.data.push(row.doc);
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

  findAnimalByID(code) {
    return new Promise(resolve => {
      
            this.db.find({
              selector: { indexKey: "animal", codigo:code},
              fields: ["codigo"],
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