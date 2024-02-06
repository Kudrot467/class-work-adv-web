"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Course = void 0;
var Course = /** @class */ (function () {
    function Course(courseId, courseName) {
        this.courseId = courseId;
        this.courseName = courseName;
    }
    Course.prototype.display = function () {
        console.log("\n        Course Id:c-".concat(this.courseId, ",\n        Course Name:").concat(this.courseName, "\n        "));
    };
    Course.prototype.assignedCourse = function () {
        return this.courseName;
    };
    return Course;
}());
exports.Course = Course;
