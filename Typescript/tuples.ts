//tuples

var student=[[101,'keshav','IT','95'],[102,'Rama','IT','95'],[103,'Shyam','EC','95'],[104,'Gattu','ME','95']]
console.log("StudenID Name, Stream, Marks");
for(var i=0;i<student.length;i++){
    console.log(`${student[i][0]} ${student[i][1]} ${student[i][2]} ${student[i][3]}`);
}