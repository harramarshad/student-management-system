"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
//Student class
class student {
    constructor(name) {
        this.id = student.counter++;
        this.name = name;
        this.courses = [];
        this.balance = 100;
    }
    //Method to enroll a student in a course
    enroll_course(course) {
        this.courses.push(course);
    }
    //To view a student balance
    view_balance() {
        console.log(`Balance for ${this.name} : $${this.balance}`);
    }
    //TO pay student fees
    pay_fees(amount) {
        this.balance -= amount;
        console.log(`$${amount}  fees paid successfully for ${this.name}`);
    }
    //method to display student status
    show_status() {
        console.log(`id ${this.id} : ${this.balance}`);
        console.log(`Name ${this.name}`);
        console.log(`Courses ${this.courses}`);
        console.log(`Balance ${this.balance}`);
    }
}
student.counter = 10000;
;
//Student manager class
class student_manager {
    constructor() {
        this.students = [];
    }
    //Method to add stidents
    add_students(name) {
        let students = new student(name);
        this.students.push(students);
        console.log(` student: ${name} added successfully. student id: ${students.id}`);
    }
    //Method to enroll a student in a course
    enroll_student(student_id, course) {
        let student = this.find_student(student_id);
        if (student) {
            student.enroll_course(course);
            console.log(`${student.name} enrolled in ${course} successfully`);
        }
    }
    //Method to view a student balance
    view_student_balance(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.view_balance();
        }
        else {
            console.log("Student not found please enter a correct student id");
        }
    }
    //Method to psy student fees
    pay_student_fees(student_id, amount) {
        let student = this.find_student(student_id);
        if (student) {
            student.pay_fees(amount);
        }
        else {
            console.log("Student not found please enter a correct student id");
        }
        ;
    }
    //Method to dispaly student status
    show_student_status(student_id) {
        let student = this.find_student(student_id);
        if (student) {
            student.show_status;
        }
        ;
    }
    //Method to find student fees
    find_student(student_id) {
        return this.students.find(std => std.id === student_id);
    }
}
//Main function to run the program
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log("Welcome to student management system");
        console.log("-".repeat(50));
        let Student_manager = new student_manager();
        //while loop to keep program running
        while (true) {
            let choice = yield inquirer_1.default.prompt([
                {
                    name: "choice",
                    type: "list",
                    message: "Select an option",
                    choices: [
                        "Add student",
                        "Enroll student",
                        "View student balance",
                        "pay fees",
                        "show ststus",
                        "Exit",
                    ]
                }
            ]);
        }
    });
}
