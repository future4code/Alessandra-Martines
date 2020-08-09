import { User } from "./User";

export class Employee extends User {
    static BENEFIT_VALUE: number = 400
    protected admission: string;
    protected salary: number;

    constructor(
        id: string,
        email: string,
        name: string,
        password: string,
        admission: string,
        salary: number
    ) {
        super(id, email, name, password);
        console.log("Entrei no Employer")
        this.admission = admission;
        this.salary = salary;
    }

    public getAdmission(): string {
        return this.admission
    }

    public getSalary(): number {
        return this.salary
    }

    public totalSalary(): number {
        return this.salary + Employee.BENEFIT_VALUE
    }
}