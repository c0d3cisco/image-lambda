import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
    "id": String,
    "name": String,
    "phone": Number,
});

const Friends = dynamoose.model('friends', schema)

export const handler = async(event) => {

    const response = { statusCode: null, body: null, };
    const myFriend = await Friends.get(event.pathParameters.id);

    try{
        await myFriend.delete(); 
        response.body = JSON.stringify("Successfully Deleted");
        response.statusCode = 200;
        
    }catch(e){
        console.log('*********ERROR**********', e);
        response.body = JSON.stringify(e.message);
        response.statusCode = 500;
        
    }
    return response;
};