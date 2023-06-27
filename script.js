// Import the required MongoDB driver
const MongoClient = require('mongodb').MongoClient;

// Connection URL and database name
const url = 'mongodb+srv://fwsj4y:uo-hyffq3@cluster0.8i9vcnx.mongodb.net/?retryWrites=true&w=majority'; // Replace with your MongoDB connection URL
const dbName = 'mydatabase'; // Replace with your database name

// Connect to the MongoDB server
MongoClient.connect(url, function(err, client) {
  if (err) {
    console.error('Error connecting to MongoDB:', err);
    return;
  }

  console.log('Connected to MongoDB successfully');

  const db = client.db(dbName);

  // Perform database operations
  const collection = db.collection('your_collection_name'); // Replace with your collection name

  // Insert a document
  const document = { name: 'John Doe', age: 30 };
  collection.insertOne(document, function(err, result) {
    if (err) {
      console.error('Error inserting document:', err);
    } else {
      console.log('Document inserted successfully:', result.insertedId);
    }
  });

  // Find documents
  collection.find({}).toArray(function(err, documents) {
    if (err) {
      console.error('Error finding documents:', err);
    } else {
      console.log('Found documents:', documents);
    }
  });

  // Update a document
  const filter = { name: 'John Doe' };
  const update = { $set: { age: 35 } };
  collection.updateOne(filter, update, function(err, result) {
    if (err) {
      console.error('Error updating document:', err);
    } else {
      console.log('Document updated successfully');
    }
  });

  // Delete a document
  const deleteFilter = { name: 'John Doe' };
  collection.deleteOne(deleteFilter, function(err, result) {
    if (err) {
      console.error('Error deleting document:', err);
    } else {
      console.log('Document deleted successfully');
    }
  });

  // Close the MongoDB connection
  client.close();
});
