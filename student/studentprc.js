function getTotalMarks(stud) {
    var total;
    total = stud.sub1 + stud.sub2 + stud.sub3;
    return total;
}
function getPercentage(stud) {
    var percentage;
    var totalMarks = getTotalMarks(stud);
    percentage = (totalMarks / 300) * 100;
    return percentage;
}
var keerthan = {
    name: 'keerthan kumar',
    sub1: 90,
    sub2: 85,
    sub3: 78,
};
//   const isJustineAnAdult: string = isAdult(justine, "I shouldn't be here!");
//   const username: string = getUserName(justine);
console.log('Student Name- ' + keerthan.name);
console.log('Student total Marks-' + getTotalMarks(keerthan));
console.log('Student Percentage is ' + getPercentage(keerthan).toFixed(2) + "%"); // for getting up to two decimales);
