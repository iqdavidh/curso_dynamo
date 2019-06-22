const AWS = require("aws-sdk");

var credentials = new AWS.SharedIniFileCredentials({profile: 'userdb'});
AWS.config.credentials = credentials;

const dynamodb = new AWS.DynamoDB( {region: 'us-west-2'});

dynamodb.listTables((err, data)=>{
   if(err) {
      console.log(err);
   } else {
      console.log(data);
   }
});
