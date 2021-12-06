var Sequelize = require ('sequelize'); 
var dbConfig = require ('../db.config'); 
var sequelize = new Sequelize (dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, 
    { 
        host : dbConfig.HOST, 
        dialect : dbConfig.dialect, 
        pool : 
        { 
            min : dbConfig.pool.min, 
            max : dbConfig.pool.max, 
            acquire : dbConfig.pool.acquire, 
            idle : dbConfig.pool.idle 
        } 
    }
);

// Connect with db using authentication() of sequelize. 
sequelize.authenticate().then( () => { 
    console.log("Connected to database successfully..."); 
}).catch (err => { 
    console.error("Unable to connect to db, because"+err); 
}).finally ( () => { 
    sequelize.close(); 
})


let studentTable = sequelize.define ( 'StudentSequelize', { 
    Student_id : Sequelize.INTEGER,
    Name : Sequelize.STRING, 
    Stream : Sequelize.STRING, 
    Marks : Sequelize.INTEGER
});

/*
studentTable.sync({force : true}).then( () =>{ 
    console.log("Table created successfully.."); 
}).finally ( () => { 
    sequelize.close();
})
*/

/*
studentTable. bulkCreate ([ 
    {Student_id : 101, Name : 'Avinash', Stream : "CS", Marks : '78'}, 
    {Student_id : 102, Name : 'Naman', Stream : "CS", Marks : '70'}, 
    {Student_id : 103, Name : 'Gattu', Stream : "IT", Marks : '85'}, 
    {Student_id : 104, Name : 'Keshu', Stream : "EC", Marks : '95'}
]).then ( (data) => { 
    console.log("Records inserted into the table successfully"); 
}).catch ( (err) => {  
    console.error("The error is : "+err); 
})
*/


let movieTable = sequelize.define ( 'MovieSequelize', { 
    Movie_ID : { 
        primaryKey : true, 
        type : Sequelize.INTEGER 
    }, 
    MovieName : Sequelize.STRING, 
    Type : Sequelize.STRING, 
    Language : Sequelize.STRING,
    cast : Sequelize.STRING 
},{ 
    timestamps : false, 
    freezeTableName : true 
});

/*
movieTable.sync().then( () =>{ 
    console.log("Table created successfully.."); 
}).catch ( (err)=> {
    console.error("Error is "+err); 
}).finally( () => { 
    sequelize.close(); 
})
*/


/*
movieTable. bulkCreate ([ 
    {Movie_ID : 101, MovieName : 'Flash', Type : "Sci-fi", Language : 'Eng', cast : 'Berry Allen'}, 
    {Movie_ID : 102, MovieName : 'Twilight', Type : "Romance", Language : 'Eng', cast : 'Kristen Stiwart'},
    {Movie_ID : 103, MovieName : 'Pursuit of Happiness', Type : "Biography", Language : 'Hin', cast : 'Will Smith'},
    {Movie_ID : 104, MovieName : 'Iron Man', Type : "Sci-fi", Language : 'Eng', cast : 'Avengers'},
]).then ( (data) => { 
    console.log("Records inserted into the table successfully"); 
}).catch ( (err) => {  
    console.error("The error is : "+err); 
})
*/

/*
movieTable.findAll ({raw : true}).then ( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/

let employeeeTable = sequelize.define ( 'EmployeeSequelize', { 
    EmpId : { 
        primaryKey : true, 
        type : Sequelize.INTEGER 
    }, 
    Name : Sequelize.STRING, 
    Dept : Sequelize.STRING, 
    Designation : Sequelize.STRING
},{ 
    timestamps : false, 
    freezeTableName : true 
});

/*
employeeeTable.sync({force : true}).then( () =>{ 
    console.log("Table created successfully.."); 
}).catch ( (err)=> {
    console.error("Error is "+err); 
}).finally( () => { 
    sequelize.close(); 
})
*/

/*
employeeeTable. bulkCreate ([ 
    {EmpId : 101, Name : 'Charn', Dept : "IT", Designation : 'Trainer'},
    {EmpId : 102, Name : 'Keshav', Dept : "IT", Designation : 'Consultant'},
    {EmpId : 103, Name : 'Naman', Dept : "ME", Designation : 'Manager'},
    {EmpId : 104, Name : 'Shyam', Dept : "EC", Designation : 'Software Engineer'} 
    {EmpId : 1200, Name : 'Nishant', Dept : "EE", Designation : 'Electrical Engineer'} 
    
]).then ( (data) => { 
    console.log("Records inserted into the table successfully"); 
}).catch ( (err) => {  
    console.error("The error is : "+err); 
})
*/

/*
employeeeTable.findAll ({raw : true}).then ( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/

/*
employeeeTable.findByPk(1200).then ( (data) =>{ 
    console.log(data.dataValues); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/

/*
employeeeTable.findAll ({where : {Name : 'Keshav'},raw : true}).then ( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/


/*
employeeeTable.findAll ({attributes : ['Name','dept'], raw : true}).then ( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/


/*
employeeeTable.findAll ({attributes : ['Name','dept'], where : {dept : 'IT'}, raw : true}).then ( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/

/*
employeeeTable.findAndCountAll ().then ( (data) =>{ 
    console.log("Number of records are : " + data.count); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/


/*
employeeeTable.findAll ({order : ['Name'], raw : true}).then( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/

/*
const Op = Sequelize.Op; 
employeeeTable.findAll ({ 
    where : { 
        Name : { [Op.like] : 'k%' } 
    },raw : true 
}).then ( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/

/*
sequelize.query ("SELECT * FROM `EmployeeSequelize`", {type : sequelize. QueryTypes .SELECT} ).
then(function(data){
    console.log(data);
})
*/

/*
const Op = Sequelize. Op; 
studentTable.findAll ({ 
    where : { 
        [Op.and] : [{Stream : 'CS'},{Marks :{[Op.gte]: 75}}] 
    }, raw : true 
}).then ( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/

/*
employeeeTable.create ({ 
    EmpId : 107, 
    Name : 'Sahil', 
    Dept : "Tech-lead", 
    Designation : "Manager" 
}).then ( (data) => { 
    console.log("Record inserted successfully..."); 
}).catch ( (err)=> { 
    console.error("There is an error : "+err); 
});
*/

/*
let employeeObj = employeeeTable.build ({EmpId : 106, Name : 'Dilip', Dept : "CS", Designation : 'Software Engineer'} ); 
employeeObj.save();
*/

/*
employeeeTable.update ( 
    {Name : 'Keshav Goyal'}, 
    {where : {Name : 'Keshav'} } 
).then ( (data) => { 
    console.log("Record updated successfully..."); 
}).catch ( err => { 
    console.error("Error is : "+err); 
});
*/

/*
employeeeTable.destroy (
    { where : {Name : 'Nishant'} }
).then ( (data) => { 
    console.log("Record deleted successfully..."); 
}).catch ( err => { 
    console.error("Error is : "+err); 
});
*/

/*
studentTable.drop().then ( () => { 
    console.log("Table dropped..."); 
})
*/

var customer1Table = sequelize.define('Customer1Sequelize',{
    Id:{
        type:Sequelize.INTEGER,
        primaryKey:true
    },
    name:Sequelize.STRING,
    location:Sequelize.STRING
    },{
        timestamps:false,
        freezeTableName:true
    }
);

var product1Table = sequelize.define('Product1Sequelize',{
    product_number:{
        primaryKey:true,
        type:Sequelize.INTEGER
    },
    description:Sequelize.STRING,
    cost:Sequelize.INTEGER,
    id:{
        type:Sequelize.INTEGER,
        references:{
            model:'Customer1Sequelize',
            key:"Id"
        }
    }
    },{
        timestamps:false,
        freezeTableName:true
    },  
);

/*
customer1Table.sync({force : true}).then( () =>{ 
    console.log("Customer Table created successfully.."); 
}).finally ( () => { 
    sequelize.close();
});

product1Table.sync({force : true}).then( () =>{ 
    console.log("Product Table created successfully.."); 
}).finally ( () => { 
    sequelize.close();
});
*/


/*
customer1Table.bulkCreate([
    {Id:1,name:'Shyam',location:'Jaipur'},
    {Id:2,name:'Keshav',location:'Jaipur'},
    {Id:3,name:'Gaurav',location:'Ajmer'},
    {Id:4,name:'Anuj',location:'banglore'},
])

product1Table.bulkCreate([
    {product_number:1,description:"TV",cost:21000,id:3},
    {product_number:2,description:"Mobile",cost:22000,id:1},
    {product_number:3,description:"Watch",cost:4200,id:2},
    {product_number:4,description:"Earphones",cost:2100,id:1},
    
])
*/

/*
sequelize.query ("select c.name,p.description from `Product1Sequelize` p inner join `Customer1Sequelize` c on p.id=c.Id", {type : sequelize. QueryTypes .SELECT} ).
then(function(data){
    console.log(data);
}).catch(err=>{
    console.log(err)
})
*/