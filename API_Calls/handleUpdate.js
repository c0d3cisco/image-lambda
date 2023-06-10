import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
    "id": String,
    "name": String,
    "phone": Number,
});

const Friends = dynamoose.model('friends', schema)

export const handler = async(event) => {
    
    const response = { statusCode: null, body: null, };
    
    try{
        const myFriend = await Friends.get(event.pathParameters.id);
        let updatedItem = {
            "id": myFriend.id,
            "name": event?.queryStringParameters?.name ? event.queryStringParameters.name : myFriend.name,
            "phone": parseInt(event?.queryStringParameters?.phone ? event.queryStringParameters.name :myFriend.phone),
        };
        let results = await Friends.update(updatedItem);
        console.log('these are out results...', results);
        response.body = JSON.stringify(results);
        response.statusCode = 200;
        
    }catch(e){
        console.log('these are out results...', e);
        response.body = JSON.stringify(e.message);
        response.statusCode = 500;
        
    }
    return response;
};
