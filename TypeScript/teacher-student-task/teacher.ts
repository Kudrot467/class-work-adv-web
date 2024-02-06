import { Course } from "./courses";
export class Teacher{
    public role:string;
    private id:number;
    public name:string;
    public age :number;
    public presentAddress: string;
    public experience:string;
    public info:string[]=[];
    constructor(role:string,id:number,name:string,age :number, presentAddress: string,experience:string){
        this.role=role;
        this.id=id;
        this.name=name;
        this.age=age;
        this.presentAddress=presentAddress;
        this.experience=experience;
    }
    display():void{
        console.log(` 
        Profession:${this.role},
        Id:tc-${this.id},
        Name:${this.name},
        Age:${this.age},
        Present Address:${this.presentAddress},
        Experience:${this.experience}
        `)
    }
    assignCourse(course:Course){
        this.info.push(course.courseName);
        console.log(`
        ${this.name} assigned ${course.courseName}
        -----------Updated Profile-----------
        Profession:${this.role},
        Id:tc-${this.id},
        Name:${this.name},
        Age:${this.age},
        Present Address:${this.presentAddress},
        Experience:${this.experience},
        Taken Course:${this.info}.
        `);
    }
    
}