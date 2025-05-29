console.log('JS loaded!');

export interface DirectorInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workDirectorTasks(): string;
}

export interface TeacherInterface {
  workFromHome(): string;
  getCoffeeBreak(): string;
  workTeacherTasks(): string;
}

export class Director implements DirectorInterface {
  workFromHome(): string {
    return "Working from home";
  }
  
  getCoffeeBreak(): string {
    return "Getting a coffee break";
  }
  
  workDirectorTasks(): string {
    return "Getting to director tasks";
  }
}

export class Teacher implements TeacherInterface {
  workFromHome(): string {
    return "Cannot work from home";
  }
  
  getCoffeeBreak(): string {
    return "Cannot have a break";
  }
  
  workTeacherTasks(): string {
    return "Getting to work";
  }
}

export function createEmployee(salary: number | string): Director | Teacher {
  if (typeof salary === 'number' && salary < 500) {
    return new Teacher();
  } else {
    return new Director();
  }
}

function printEmployeeType(employee: Teacher | Director): void {
  if (employee instanceof Teacher) {
    console.log('Teacher');
  } else if (employee instanceof Director) {
    console.log('Director');
  }
}

function isDirector(employee: Teacher | Director): employee is Director {
  return employee instanceof Director;
}

export function executeWork(employee: Teacher | Director): string {
  if (isDirector(employee)) {
    return employee.workDirectorTasks();
  } else {
    return employee.workTeacherTasks();
  }
}

export type Subjects = 'Math' | 'History';

export function teachClass(todayClass: Subjects): string {
  if (todayClass === 'Math') {
    return 'Teaching Math';
  } else {
    return 'Teaching History';
  }
}

console.log("Creating employee with salary 200:");
printEmployeeType(createEmployee(200));

console.log("Creating employee with salary 1000:");
printEmployeeType(createEmployee(1000));

console.log("Creating employee with salary '$500':");
printEmployeeType(createEmployee('$500'));

console.log("Created objects:");
console.log(createEmployee(200));
console.log(createEmployee(1000));
console.log(createEmployee('$500'));

console.log("\nExecuting work:");
console.log(executeWork(createEmployee(200)));
console.log(executeWork(createEmployee(1000)));

console.log("\nTeaching classes:");
console.log(teachClass('Math'));
console.log(teachClass('History'));
