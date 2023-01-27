// //All students with an average grade higher than 3
// All female student names with an average grade of 5
// All male student full names who live in Skopje and are over 18 years old
// The average grades of all female students over the age of 24
// All male students with a name starting with B and average grade over 2


fetch('https://raw.githubusercontent.com/sedc-codecademy/skwd9-04-ajs/main/Samples/students_v2.json')
    .then((response) => response.json()).then((data) => {

        //1
        // let studentsWithAnAverageGradeHigherThan3 = data
        //     .filter((s) => s.averageGrade > 3);
        // console.log(studentsWithAnAverageGradeHigherThan3);

        //2
        //    let femaleStudentsWithAnAverageGradeOf5 = data
        //         .filter((s) => s.gender === 'Female' && s.averageGrade === 5)
        //         .map((s) => s.firstName);
        //    console.log(femaleStudentsWithAnAverageGradeOf5);

        //3

        // let thirdArray = data
        //     .filter((s) => s.city === 'Skopje' && s.age > 18)
        //     .map((s) => s.firstName && s.lastName);
        // console.log(thirdArray);

        //4

        //   let fourthArray = data
        //   .filter((s)=>s.gender === 'Female' && s.age > 24)
        //   .map((s)=> s.averageGrade);
        //   console.log(fourthArray);


        //5

    //  let fifthArray = data
    //  .filter((s)=>s.averageGrade > 2 && s.gender === 'Male' && s.firstName.includes('B'));
    //  console.log(fifthArray);

    });