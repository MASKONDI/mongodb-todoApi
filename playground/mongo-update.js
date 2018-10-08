const {MongoClient,ObjectID}=require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
	if(err)
	{
		return console.log('Unable to connected to the server');
	}
	console.log('connected to the server');
	db.collection('Todos').findOneAndUpdate({
		_id: new ObjectID('5bba091dbf23f2ae283dbd9c')
	},{
		$set: {
			text:'rajput'
		}
	},{
		returnOriginal:'krishna'
	}).then((result)=>{
		console.log(result);
	});
	



	//db.close();
});