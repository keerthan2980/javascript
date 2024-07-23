type Student = {
    name: string;
    sub1: number;
    sub2: number;
    sub3: number;
  };
  function getTotalMarks(stud: Student): number {
    let total : number;
    total = stud.sub1 + stud.sub2 + stud.sub3;
    return total;
  }
  
  function getPercentage(stud: Student): number{ //when we use tofixed  us the string 
   let percentage : number;
   let totalMarks: number = getTotalMarks(stud);
   percentage = (totalMarks/300) * 100;
   return  percentage;
  }
  
  const keerthan: Student = {
    name: 'keerthan kumar',
    sub1: 90,
    sub2: 85,
    sub3:78,
  };
//   const isJustineAnAdult: string = isAdult(justine, "I shouldn't be here!");
  
//   const username: string = getUserName(justine);
  console.log('Student Name- ' + keerthan.name);
  console.log('Student total Marks-' + getTotalMarks(keerthan));
  console.log('Student Percentage is ' + getPercentage(keerthan).toFixed(2)+"%");// for getting up to two decimales);