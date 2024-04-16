export class Admin {
  id: number
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  dateOfBirth: Date;
  sex: string;
  accountType: string;

  constructor(id: number, firstName: string, lastName: string, email: string, password: string, dateOfBirth: Date, sex: string, accountType: string) {
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
