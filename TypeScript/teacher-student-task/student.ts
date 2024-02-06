export class Student{
    public role:string;
    private id:number;
    public name:string;
    public fatherName:string;
    public motherName:string;
    public contact:string;
    constructor(role:string,id:number,name:string,fatherName:string, motherName:string,contact:string){
        this.role=role;
        this.id=id;
        this.name=name;
        this.fatherName=fatherName;
        this.motherName=motherName;
        this.contact=contact;
    }
    display():void{
        console.log(`
        Role:${this.role},
        Id:std-${this.id},
        Name:${this.name},
        Father's Name:${this.fatherName},
        Mother's Name:${this.motherName},
        Contact No. :${this.contact}
        `);
    }

}