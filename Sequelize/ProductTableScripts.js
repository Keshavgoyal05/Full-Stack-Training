var Sequelize = require ('sequelize'); 
var dbConfig = require ('./db.config'); 
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
let productTable = sequelize.define ( 'ProductSequelize', { 
    Product_ID : { 
        primaryKey : true, 
        type : Sequelize.INTEGER 
    }, 
    ProductName : Sequelize.STRING, 
    Description : Sequelize.STRING, 
    cost : Sequelize.INTEGER 
},{ 
    timestamps : false, 
    freezeTableName : true 
});

/* 
productTable.sync().then( () =>{ 
    console.log("Table created successfully.."); 
}).catch ( (err)=> {
    console.error("Error is "+err); 
}).finally( () => { 
    sequelize.close(); 
})
*/

/*
productTable. bulkCreate ([ 
    {Product_ID : 101, ProductName : 'Alex', Description : "Alexa", cost : 3500}, 
    {Product_ID : 102, ProductName : '5.1 speakers', Description : "5.1 Sony Home theatre system", cost : 18000}, 
    {Product_ID : 103, ProductName : 'Laptop', Description : "Lenovo Laptop", cost : 62000}, 
    {Product_ID : 104, ProductName : 'Dolby digital speakers', Description : "Dolby digital speakers", cost : 10000} 
]).then ( (data) => { 
    console.log("Records inserted into the table successfully"); 
}).catch ( (err) => {  
    console.error("The error is : "+err); 
})

productTable.create ({ 
    Product_ID : 105, 
    ProductName : 'Routers', 
    Description : "tp-link Routers", 
    cost : 3200 
}).then ( (data) => { 
    console.log("Record inserted successfully..."); 
}).catch ( (err)=> { 
    console.error("There is an error : "+err); 
});

let productobj = productTable.build ({Product_ID : 106, ProductName : 'Sports Watch', Description : "MI Sports watch", cost : 9900}); 
productobj.save();
*/



/*
productTable.findByPk(102).then ( (data) =>{ 
    console.log(data.dataValues); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/

/*
productTable.findAll ({raw : true}).then ( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});

sequelize.query ("SELECT * FROM `ProductSequelize`", {type : sequelize. QueryTypes .SELECT} ).
then(function(data){
    console.log(data);
})

//SELECT ProductName, Cost FROM ProductSequelize 
productTable.findAll ({attributes : ['ProductName','cost'], raw : true}).then ( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/

/*
//SELECT * FROM ProductSequelize WHERE ProductName = 'Laptop' 
productTable.findAll ({where : {ProductName : 'Laptop'},raw : true}).then ( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});

//SELECT ProductName, Cost FROM ProductSequelize WHERE ProductName = 'Laptop" 
productTable.findAll ({attributes : ['ProductName','cost'], where : {ProductName : 'Laptop'}, raw : true}).then ( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/

/*
//SELECT COUNT(*) from ProductSequelize 
productTable.findAndCountAll ().then ( (data) =>{ 
    console.log("Number of records are : " + data.count); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});

//SELECT COUNT(*) from ProductSequelize where ProductName='TV' 
productTable.findAndCountAll ({where : {ProductName : 'TV'}}).then ( (data) =>{ 
    console.log("Number of records are : " + data.count); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/

/*
//Asc Sorting 
productTable.findAll ({order : ['ProductName'], raw : true}).then( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});

//Desc Sorting 
productTable.findAll ({order : [['ProductName', 'DESC']], raw : true}).then ( (data) =>{ 
    console.log(data); 
}).catch ( (err)=>{ 
    console.error("Error is : " + err); 
});
*/

/*
//SELECT FROM ProductSequelize WHERE ProductName LIKE ='d%'; 
const Op = Sequelize.Op; 
productTable.findAll ({ 
    where : { 
        ProductName : { [Op.like] : 'd%' } 
    },raw : true 
}).then ( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/

/*
//SELECT * FROM ProductSequelize WHERE ProductName = 'Mobile' OR cost=3204 
const Op = Sequelize. Op; 
productTable.findAll ({ 
    where : { 
        [Op.or] : [{ProductName : 'Mobile'},{cost : 3200}] 
    }, raw : true 
}).then ( (data) =>{ 
    console.log(data); 
}).catch ( (err)=> { 
    console.error("Error is : " + err); 
});
*/

//update
productTable.update ( 
    {ProductName : 'Amazon Alexa'}, 
    {where : {ProductName : 'Alex'} } 
).then ( (data) => { 
    console.log("Record updated successfully..."); 
}).catch ( err => { 
    console.error("Error is : "+err); 
});

//delete
productTable.destroy (
    { where : {ProductName : '5.1 speakers'} }
).then ( (data) => { 
    console.log("Record deleted successfully..."); 
}).catch ( err => { 
    console.error("Error is : "+err); 
});

//Table Drop
productTable.drop().then ( () => { 
    console.log("Table dropped..."); 
})



