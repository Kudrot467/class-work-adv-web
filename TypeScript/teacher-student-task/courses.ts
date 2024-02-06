export class Course{
    public courseId:number;
    public courseName:string;
    constructor(courseId:number,courseName:string){
        this.courseId=courseId;
        this.courseName=courseName;
    }
    display():void{
        console.log(`
        Course Id:c-${this.courseId},
        Course Name:${this.courseName}
        `);
    }
    assignedCourse():any{
        return this.courseName;
    }
}