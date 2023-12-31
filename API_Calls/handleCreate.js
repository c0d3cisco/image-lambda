import dynamoose from 'dynamoose';

const schema = new dynamoose.Schema({
    "id": String,
    "name": String,
    "phone": Number,
});

const friends = dynamoose.model('friends', schema)

export const handler = async(event) => {
    // TODO implement
    console.log('EVENT', event);
    let parsedBody = JSON.parse(event.body);
    const response = { statusCode: null, body: null, };
    // response.body = JSON.stringify('Stuffffffff');
    try{
        let results = await friends.create(parsedBody);
        console.log('these are out results...', results);
        response.body = JSON.stringify(results);
        response.statusCode = 200;
    }catch(e){
        response.body = JSON.stringify(e.message);
        response.statusCode = 500;
        
    }
    return response;
};