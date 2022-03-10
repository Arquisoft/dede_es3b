
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://DeDeportes3b:dedeportes2@aswdedeportes.9ukdb.mongodb.net/ASWDeDeportes?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
client.connect(err => {
  const collection = client.db("AWS").collection("Product");
  // perform actions on the collection object
  client.close();
});
