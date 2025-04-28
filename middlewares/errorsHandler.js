// funzione middleware per gli errori 

function errorsHandler (err,req,res,next){
	es.status(500);
	
	res.json({
		error:err.message
	});
}
module.export = errorsHandler;