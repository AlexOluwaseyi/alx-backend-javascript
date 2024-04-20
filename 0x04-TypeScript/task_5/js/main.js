"use strict";
exports.__esModule = true;
exports.sumMinorCredits = exports.sumMajorCredits = void 0;
function sumMajorCredits(subject1, subject2) {
    var MajorCredits = subject1.credits + subject2.credits;
    return MajorCredits;
}
exports.sumMajorCredits = sumMajorCredits;
function sumMinorCredits(subject1, subject2) {
    var MinorCredits = subject1.credits + subject2.credits;
    return MinorCredits;
}
exports.sumMinorCredits = sumMinorCredits;
