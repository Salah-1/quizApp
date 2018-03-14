export class Student {
    private _id: number;
    private  _name: string;

  // method to initialize properties

  constructor(myID: number, myName: string) {
    this._id = myID;
    this._name = myName;
  }
     
  get id(): number {
    return this._id;
  }

  set id(stId: number) {
    this._id = stId;
}

 get name(): string {
    return this._name;
  }

set name(stName: string) {
  this._name = stName;
}
 
} // End class 

 

