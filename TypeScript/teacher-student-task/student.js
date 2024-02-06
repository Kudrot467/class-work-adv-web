"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(role, id, name, fatherName, motherName, contact) {
        this.courses = [];
        this.role = role;
        this.id = id;
        this.name = name;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.contact = contact;
    }
    Student.prototype.display = function () {
        console.log("\n        Role:".concat(this.role, ",\n        Id:std-").concat(this.id, ",\n        Name:").concat(this.name, ",\n        Father's Name:").concat(this.fatherName, ",\n        Mother's Name:").concat(this.motherName, ",\n        Contact No. :").concat(this.contact, ",\n        Enrolled Course:0.\n        "));
    };
    Student.prototype.enrollCourse = function (course) {
        this.courses.push(course.courseName);
        console.log("");
        console.log("\n        ".concat(this.name, " enrolled ").concat(course.courseName, ",\n        Total Enrolled:").concat(this.courses.length, ",\n        ------").concat(this.name, "'s Profile------\n        Id:std-").concat(this.id, ",\n        Name:").concat(this.name, ",\n        Father's Name:").concat(this.fatherName, ",\n        Mother's Name:").concat(this.motherName, ",\n        Contact No. :").concat(this.contact, ",\n        Enrolled Course:").concat(this.courses, ".\n        "));
    };
    return Student;
}());
exports.Student = Student;
