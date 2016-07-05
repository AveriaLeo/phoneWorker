/**
 * Created by leonid on 7/5/16.
 */

//console.log("test");

//Прототипы
//Прототип объекта book

function Book() {
    var phones = [];
    var holder = "test";

    this.getHolder = function(){return holder};
    this.setHolder = function(e){holder = e};
    this.getJSON = function(){
        var output = {};
        output.phones = phones;
        output.holder = holder;
        return output;
    };
    this.addPhone = function(e){
        phones.push(e);
    };
}

function Phone() {
    var number;
    var data = {
        secondname: null,
        firstname: null,
        fathername: null,
        adress: {
            city: null,
            street: null,
            home: null,
            flat: null
        }
    };
    var book;

    this.setNumber = function(e){
        number = e;
    };
    this.getNumber = function(){
        return number;
    }
    //this.set

}


var book = new Book;

book.setHolder("user");
console.log(book.getHolder());
