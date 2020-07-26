interface ITask {
  name: string;
  description: string;
  isDone: boolean;
}

interface ITaskManager {
  toggleDone(): void;
}

const myTask: ITask = {
  name: 'Call Marjie',
  description: 'Do it ASAP',
  isDone: false
};

//--------------------------------------------------

class Task implements ITask, ITaskManager {
  public name: string;
  public description: string;
  public isDone: boolean;

  private _additionalInfo: string = 'It`s a secret';
  protected readonly protectedSecret: string = 'Another secret';

  constructor(name: string, description: string, isDone: boolean) {
    this.name = name;
    this.description = description;
    this.isDone = isDone;
  }

  get additionalInfo() {
    return this._additionalInfo;
  }

  set additionalInfo(info: string) {
    this._additionalInfo = info;
  }

  toggleDone(): void { // public by default
    this.isDone = !this.isDone;    
  }

  public tellOneMoreSecret(): void {
    console.log(this.protectedSecret);
  }

  private tellTheSecret(): void {
    console.log(this.additionalInfo);
  }
}

//--------------------------------------------------

interface INewTask extends ITask {
  dueDate: Date | string;
}

class NewTask extends Task implements INewTask {
  public dueDate: string;

  protected readonly protectedSecret: string = 'New sectet';
  // public _additionalInfo: string = 'New sectet'; // Error

  constructor(name: string, description: string, isDone: boolean, dueDate: string) {
    super(name, description, isDone);
    this.dueDate = dueDate;
  }

  public tellOneMoreSecret() {
    super.tellOneMoreSecret();
    // smth else

    // super.tellTheSecret(); // Error
    // this.protectedSecret = 'Whoops';
  }
}

//--------------------------------------------------

abstract class Vehicle {
  constructor(public name: string, public wheelsCount: number, public engine: string) {}

  print() {
    console.log(this.name, this.wheelsCount, this.engine);
  }

  abstract drive(): void // must be implemented
}

class Car extends Vehicle {
  constructor(public brand: string) { super('Car', 4, 'Four-Stroke') }

  drive() { console.log('I\'m driving the car', this.brand) }
  sell() { console.log('selling the car', this.brand) }
}

let myVehicle: Vehicle;
// myVehicle = new Vehicle('name', 0, 'empty'); // Error
myVehicle = new Car('Mazda');
myVehicle.print();
myVehicle.drive();
// myVehicle.sell(); // Error