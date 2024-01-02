"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Key = /** @class */ (function () {
    function Key(signature) {
        this.signature = signature;
        this.signature = signature;
    }
    Key.prototype.getSignature = function () {
        return this.signature;
    };
    return Key;
}());
var Person = /** @class */ (function () {
    function Person(key) {
        this.key = key;
    }
    Person.prototype.getKey = function () {
        return this.key.getSignature();
    };
    return Person;
}());
var House = /** @class */ (function () {
    function House(key) {
        if (key === void 0) { key = new Key(321); }
        this.key = key;
        this.door = false;
        this.tenants = [];
    }
    House.prototype.comeIn = function (person) {
        this.tenants.push(person);
    };
    House.prototype.openDoor = function (key) {
        console.log("Provided key signature:", key.getSignature());
        console.log("Expected key signature:", this.key.getSignature());
        if (key.getSignature() === this.key.getSignature()) {
            this.door = true;
            console.log("Door opened!");
        }
        else {
            console.log("Incorrect key. Door remains closed.");
        }
    };
    return House;
}());
var MyHouse = /** @class */ (function (_super) {
    __extends(MyHouse, _super);
    function MyHouse(key) {
        return _super.call(this, key) || this;
    }
    MyHouse.prototype.openDoor = function () {
        _super.prototype.openDoor.call(this, this.key);
    };
    return MyHouse;
}(House));
var key = new Key(123);
var house = new MyHouse(key);
var person = new Person(key);
house.openDoor(person.getKey());
house.comeIn(person);
