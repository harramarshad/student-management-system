import inquirer from "inquirer";
import Choice from "inquirer/lib/objects/choice";
import Choices from "inquirer/lib/objects/choices";

//Student class
class Student{
    static counter = 10000;
    id : number;
    name: string;
    courses: string[];
    balance: number;

    constructor (name: string){
        this.id = Student.counter++;
        this.name =name;
        this.courses = [];
        this.balance = 100;
    }

    //Method to enroll a student in a course
    enroll_course(course:string){
       this.courses.push(course)
    }

    //To view a student balance
    view_balance(){
        console.log(`Balance for ${this.name} : $${this.balance}`);
    }
    //TO pay student fees
     pay_fees(amount:number){
       this.balance -= amount;
       console.log(`$${amount}  fees paid successfully for ${this.name}`);
     }

     //method to display student status
     show_status(){
       console.log(`id ${this.id} : ${this.balance}`)
       console.log(`Name ${this.name}`);
       console.log(`Courses ${this.courses}`);
       console.log(`Balance ${this.balance}`);
     }
    };
     //Student manager class
     class student_manager{
      students:Student[]
      constructor(){
        this.students = [];
      }
      //Method to add students
      add_student(name:string){
         let student = new Student (name);
         this.students.push(student);
         console.log(` student: ${name} added successfully. student id: ${student.id}`)
      }

      //Method to enroll a student in a course
      enroll_student(student_id:number,course:string){
        let student= this.find_student(student_id);
         if(student){
            student.enroll_course(course);
            console.log(`${student.name} enrolled in ${course} successfully`)
         }
      }
      //Method to view a student balance
        view_student_balance(student_id:number){
            let student= this.find_student(student_id);
            if(student){
                student.view_balance();
                
            }
           else{
            console.log("Student not found please enter a correct student id");
           }
        }
        //Method to pay student fees
        pay_student_fees(student_id:number,amount:number){
            let student= this.find_student(student_id);
            if(student){
                student.pay_fees(amount);
            }
            else{
                console.log("Student not found please enter a correct student id");
            };
        }

        //Method to dispaly student status
        show_student_status(student_id:number){
            let student= this.find_student(student_id);
            if(student){
               student.show_status
            };
        }

        //Method to find student fees
        find_student(student_id:number){
            return this.students.find(std => std.id === student_id);

        }
     };
    
     //Main function to run the program
     async function main(){
        console.log("Welcome to student management system");
        console.log("-" .repeat(50));

        let Student_manager=new student_manager();

       //while loop to keep program running
       while(true){
        let choice = await inquirer.prompt([
            {
                name:"choice",
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

    //Using switch case to handle user choice
      
    switch(choice.choice){
        case "Add student":
            let name_input= await inquirer.prompt([
                { 
               name: "name",
               type: "input",
               message: "Enter a student name",
    
                }
            ]);
            student_manager.add_student(name_input.name);
            break;
    
        case "Enroll student":
            let course_input = await inquirer.prompt([
                {
                    name : "Student id",
                    type: "number",
                    message: "Enter a student ID",
                },
                {
                    name: "course",
                    type: "input",
                    message: "Enter a course name",


                }
            ]);
            student_manager.enroll_student(course_input.student_id, course_input.course);
            break;
        case "View student balance":
            let balance_input = await inquirer.prompt([
                {
                    name: "student_id",
                    type: "number",
                    message: "Enter a student id",
                }
            ]);
            break;
        
        case "Pay fees":
            let fees_input = await inquirer.prompt([
                {
                    name: "student_id",
                    type: "number",
                    message: "Enter a student id",
                },
                {
                  name: "amount",
                  type: "number",
                  message: "Enter the amount",
                }
            ]);
            student_manager.pay_student_fees(fees_input.student, fees_input);
            break;

            case "Show status":
              let status_input = await inquirer.prompt([
                {
                    name: "Student ID",
                    type: "number",
                    message: "Enter a student ID"
                }
              ]);
              
              case "Exist":
                console.log("Existing...");
                process.exit();
    }

    }
}

//Calling a function
 main();











