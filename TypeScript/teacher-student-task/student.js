"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
var Student = /** @class */ (function () {
    function Student(role, id, name, fatherName, motherName, contact) {
        this.role = role;
        this.id = id;
        this.name = name;
        this.fatherName = fatherName;
        this.motherName = motherName;
        this.contact = contact;
    }
    Student.prototype.display = function () {
        console.log("\n        Role:".concat(this.role, ",\n        Id:std-").concat(this.id, ",\n        Name:").concat(this.name, ",\n        Father's Name:").concat(this.fatherName, ",\n        Mother's Name:").concat(this.motherName, ",\n        Contact No. :").concat(this.contact, "\n        "));
    };
    return Student;
}());
exports.Student = Student;
