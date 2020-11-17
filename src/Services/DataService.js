import firebase from "../firebase.js";

//creates/reads lvl 1 object
const db = firebase.ref('');

class DataService {


    getAll() {
        return db;
    }
    create(input) {
        var retVal = this.fillBlanks(input);

        return db.push(retVal);
    }

    update(input) {
        var retVal = this.fillBlanks(input);

        return db.child(input.key).update(retVal);
    }

    delete(key) {
        return db.child(key).remove();
    }

    calculateCPP(input) {

    }

}

export default new DataService();