const {MongoClient,ObjectId} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db) =>{
	if(err)
	{
		return console.log('unable to connect to the server');
	}
	console.log('connected to the server');
	//deleteMany
	//db.collection('Todos').deleteMany({completed:false}) .then((result)=>
	//{
	//	console.log(result);
	//});

	//deleteOne
	//db.collection('Todos').deleteOne({completed:false}).then((result)=>
	//{
	//	console.log(result);
	//});

	//findOneandDelete
	db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>
	{
	console.log(result);
	});


	//db.close();

});



