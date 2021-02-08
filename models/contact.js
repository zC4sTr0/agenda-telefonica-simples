const contacts = [];

module.exports = class Contact {
    constructor(name, age, number) {
        this.ID = contacts.length + 1;
        console.log(this.ID);
        this.name = name;
        this.age = age;
        this.number = number;
    }

    save() {
        contacts.push(this);
    }

    static getContacts() {
        return contacts;
    }

}