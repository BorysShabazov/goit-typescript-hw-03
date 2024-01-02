type sig = number | string;
interface IKey {
  getSignature(): sig;
}
interface IPerson {
  getKey(): sig;
}
interface IHouse {
  door: boolean;
  tenants: IPerson[];

  comeIn(person: IPerson): void;
  openDoor(key: IKey): void;
}
class Key implements IKey {
  constructor(private signature: sig) {
    this.signature = signature;
  }
  getSignature(): sig {
    return this.signature;
  }
}
class Person implements IPerson {
  constructor(private key: IKey) {}
  getKey(): sig {
    return this.key.getSignature();
  }
}
class House implements IHouse {
  door: boolean = false;
  tenants: IPerson[] = [];

  constructor(protected key: IKey = new Key(321)) {}

  comeIn(person: IPerson): void {
    this.tenants.push(person);
    console.log("21");
  }
  openDoor(key: IKey): void {
    if (key.getSignature() === this.key.getSignature()) {
      this.door = true;
      console.log("Door opened!");
    } else {
      console.log("Incorrect key. Door remains closed.");
    }
  }
}

class MyHouse extends House {
  constructor(key: IKey) {
    super(key);
  }

  openDoor(): void {
    super.openDoor(this.key);
  }
}

const key = new Key(123);

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
