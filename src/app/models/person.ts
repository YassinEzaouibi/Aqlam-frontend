import {AccountType} from "./enum/AccountType";
import {Sex} from "./enum/Sex";

export class Person {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  sex: Sex;
  accountType: AccountType;

  constructor(id: number, firstName: string, lastName: string, email: string, password: string, dateOfBirth: Date, sex: Sex, accountType: AccountType) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.dateOfBirth = dateOfBirth;
    this.sex = sex;
    this.accountType = accountType;
  }
}
