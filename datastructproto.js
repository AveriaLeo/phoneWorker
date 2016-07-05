/**
 * Created by leonid on 7/5/16.
 */

"use strict"


function Book() {
    this.phones = [];
    this.holder = null;
}

Book.prototype.setHolder = function(e) {

    this.holder = e;

   /*
    if(typeof(e)=="object") {
        e.book = this;
        console.log("Holder is a another phone with number "+e.number);
    }
    */
};

Book.prototype.getHolder = function() {
    return this.holder;
};

Book.prototype.addPhone = function(e) {
    this.phones.push(e);
    console.log(typeof(e));
    /*
    if(typeof(e)!="string") {

        e.book.holder = this.number;
        console.log("Holder is a another phone with number "+this.holder);

    }
    */
};

Book.prototype.consoleDump = function() {
    console.log(JSON.stringify(this));
};


function Phone(dat) {
    if(dat!=undefined) {
        this.number = dat.number;
        this.data = dat.data;
        this.book = new Book();
    }
};

Phone.prototype.setBook = function(book) {
    this.book = book;
};

Phone.prototype.getBook = function() {
    return this.book;
};

Phone.prototype.setData = function(data) {
    this.data = data;
};

Phone.prototype.getData = function() {
    return this.data;
};

Phone.prototype.getObject = function() {
    return this;
};


//Проверка работоспособности системы.


//Создаем записную книжку пользователя
var book = new Book();
book.setHolder("user");

//Создаем номер телефона с информацией о владельце
var phone = new Phone(
    {
        number: 88005553535,
        data: {
            secondname: "Иванов",
            firstname: "Иван",
            fathername: "Иванович",
            adress: {
                city: "Москва",
                street: "Петровская улица",
                home: "64",
                flat: "кв. 12"
            }
        },
        book: new Book()
    }
);
//Добавляем к записной книжке
book.addPhone(phone);


//Создаем ещё один номер телефона
var phone_two = new Phone(
    {
        number: 89995553535,
        data: {
            secondname: "Шоберг",
            firstname: "Аке",
            fathername: "Иванович",
            adress: {
                city: "Москва",
                street: "Манямироская улица",
                home: "1337",
                flat: "кв. 12"
            }
        },
        book: new Book(this.number)
    }
);


//Добавляем новый номер к записной книжке номера
phone.book.addPhone(phone_two);

book.consoleDump();