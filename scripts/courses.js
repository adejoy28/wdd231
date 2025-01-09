const courses = [
    {
        subject: 'CSE',
        number: 110,
        title: 'Introduction to Programming',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 130,
        title: 'Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course introduces students to the World Wide Web and to careers in web site design and development. The course is hands on with students actually participating in simple web designs and programming. It is anticipated that students who complete this course will understand the fields of web design and development and will have a good idea if they want to pursue this degree as a major.',
        technology: [
            'HTML',
            'CSS'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 111,
        title: 'Programming with Functions',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'CSE 111 students become more organized, efficient, and powerful computer programmers by learning to research and call functions written by others; to write, call , debug, and test their own functions; and to handle errors within functions. CSE 111 students write programs with functions to solve problems in many disciplines, including business, physical science, human performance, and humanities.',
        technology: [
            'Python'
        ],
        completed: true
    },
    {
        subject: 'CSE',
        number: 210,
        title: 'Programming with Classes',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course will introduce the notion of classes and objects. It will present encapsulation at a conceptual level. It will also work with inheritance and polymorphism.',
        technology: [
            'C#'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 131,
        title: 'Dynamic Web Fundamentals',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience in Web Fundamentals and programming. Students will learn to create dynamic websites that use JavaScript to respond to events, update content, and create responsive user experiences.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: true
    },
    {
        subject: 'WDD',
        number: 231,
        title: 'Frontend Web Development I',
        credits: 2,
        certificate: 'Web and Computer Programming',
        description: 'This course builds on prior experience with Dynamic Web Fundamentals and programming. Students will focus on user experience, accessibility, compliance, performance optimization, and basic API usage.',
        technology: [
            'HTML',
            'CSS',
            'JavaScript'
        ],
        completed: false
    }
];

const items = [
    { name: 'Apple', price: 1 },
    { name: 'Orange', price: 2 },
    { name: 'Mango', price: 3 },
];


// createH3Element(courses);

const div = document.querySelector("#c__cert__div");


// filtering aspect of the course certificate sections

const allCourses = document.querySelector("#all__cert");
const cseBtn = document.querySelector("#cse");
const wddBtn = document.querySelector("#wdd");


allCourses.addEventListener("click", () => {
    createH3Element(courses);
    reducer(courses);
    // console.log(courses.reduce((accumulator, item) => accumulator += item.credits, 0));
    // filterCredit(courses);
});

cseBtn.addEventListener("click", () => {
    // createTempleCard(temples.filter(temple => temple.dedicated.substring(0, 3).includes("19")));
    const cseCourses = courses.filter(course => GetValue(course.subject, "CSE"))
    createH3Element(cseCourses);
    reducer(cseCourses);
    // console.log(courses1.reduce((accumulator, item) => accumulator += item.credits, 0));
});
// console.log(filterCredit(courses1));
wddBtn.addEventListener("click", () => {
    const wddCourses = courses.filter(course => GetValue(course.subject, "WDD"));
    createH3Element(wddCourses);//courses.filter(course => GetValue(course.subject, "WDD")));
    reducer(wddCourses);
    // console.log(wdd.reduce((accumulator, item) => accumulator += item.credits, 0));
    // filterCredit(courses.filter(course => GetValue(course.subject, "WDD")));
    // createH3Element(courses.filter(course => course.subject.substring(0, 2).includes("wdd")));
});

// const totalcredits = fourses.reduce((accumulator, course) => {
//     // console.log(`${typeof accumulator} += ${course}`)
//     return accumulator += course.credits;
// });

function reducer(courseLists) {
    let totalCreditsNumber = document.querySelector("#creditNum");
    totalCreditsNumber.textContent = courseLists.reduce((accumulator, course) => accumulator += course.credits, 0);
}



function createH3Element(filteredCourses) {
    div.innerHTML = "";
    filteredCourses.forEach(course => {
        const h3 = document.createElement("h3");
        h3.textContent = `${course.subject} ${course.number}`;
        h3.setAttribute('class', course.completed);
        div.appendChild(h3);
    });
}

function GetValue(value, filter) {
    if (value == filter)
        return value;
}

allCourses.click();