"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Teacher = void 0;
var Teacher = /** @class */ (function () {
    function Teacher(role, id, name, age, presentAddress, experience) {
        this.info = [];
        this.role = role;
        this.id = id;
        this.name = name;
        this.age = age;
        this.presentAddress = presentAddress;
        this.experience = experience;
    }
    Teacher.prototype.display = function () {
        console.log(" \n        Profession:".concat(this.role, ",\n        Id:tc-").concat(this.id, ",\n        Name:").concat(this.name, ",\n        Age:").concat(this.age, ",\n        Present Address:").concat(this.presentAddress, ",\n        Experience:").concat(this.experience, "\n        "));
    };
    Teacher.prototype.assignCourse = function (course) {
        console.log("\n        ".concat(this.name, " assigned ").concat(course.courseName, "\n        -----------Updated Profile-----------\n        Profession:").concat(this.role, ",\n        Id:tc-").concat(this.id, ",\n        Name:").concat(this.name, ",\n        Age:").concat(this.age, ",\n        Present Address:").concat(this.presentAddress, ",\n        Experience:").concat(this.experience, ",\n        "));
        this.info.push(course.courseName);
        console.log("Taken Course:".concat(this.info));
    };
    return Teacher;
}());
exports.Teacher = Teacher;
