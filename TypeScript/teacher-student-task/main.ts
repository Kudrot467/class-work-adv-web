import{Teacher} from './teacher';
import { Student } from './student';
import { Course } from './courses';
const teacher = new Teacher("Teacher",1, "Mr. Smith",20,"Mirpur-12","6-Years","Web-Technology");
const mathCourse = new Course(1, "Mathematics");
teacher.display();
teacher.assignCourse(mathCourse);
// const student1=new Student("Student",101,"Rose","Aladuddin","Khadiza","01792144467");
// student1.display();