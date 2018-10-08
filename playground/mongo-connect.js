const MongoClient = require('mongodb').MongoClient;
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
	if(err)
	{
	return console.log('Unable to connect mongodb server');
	}
	console.log('Connected to MongoDB Servert');
	//const db=client.db('TodoApp')

//	db.collection('Todos').insertOne({
//		text:'Something to do',
//		completed: false
//	}, (err, result) => {
//		if (err)
//		{
//			return console.log('Unable to insert todo',err);
//		}
//		console.log(JSON.stringify(result.ops,undefined,2)); 
//
//	});
db.collection('Users').insert({
	Name:'Krishna',
	Age:'32',
	location:'B-2 Rajeev nagar yashoda nagar kanpur'
}, (err, result) => {
	if (err)
	{
		return console.log('Unable to insert users',err);
	}
	console.log(JSON.stringify(result.ops,undefined,2));
});
	
	db.close();
});