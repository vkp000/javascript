//for in

const myObject = {
    js: 'JavaScript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by ruby'
}

for(const key in myObject){ // it will  itearte on the keys of the object
    console.log(`${key}- shortcut is for ${myObject[key]}`);
}

const programmingg = ["js", "rb", "py", "java", "cpp"]

for(const key in programmingg){ // it will print 0,1,2,3,4,5,6 because keys are indexes which are corrensponding to entries
    console.log(key); 
}

for(const key in programmingg){ // it will print 0,1,2,3,4,5,6 because keys are indexes which are corrensponding to entries
    console.log(programmingg[key]); 
}