import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
    "id": String,
    "name": String,
    "phone": Number,
});

const friends = dynamoose.model('friends', schema)

export const handler = async(event) => {
    // TODO implement
    const response = { statusCode: null, body: null, };
    // TODO event.pathParameters.id
    try{
        
        let results = event?.pathParameters?.id ? 
        await friends.scan({"id": {"contains": event.pathParameters.id}}).exec() 
        : await friends.scan().exec();
        
        console.log('event.pathParameters.id', (event.pathParameters));
        console.log('results**********', results);
        response.body = JSON.stringify(results);
        response.statusCode = 200;
    }catch(e){
        response.body = JSON.stringify(e.message);
        response.statusCode = 500;
        
    }

    return response;
};