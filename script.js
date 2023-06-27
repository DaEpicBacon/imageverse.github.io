// Initialize Firebase
const firebaseConfig = {
  // Your Firebase configuration
};
firebase.initializeApp(firebaseConfig);

// Get a reference to the storage service
const storage = firebase.storage();

// Handle file upload
const fileInput = document.getElementById('file-input');
fileInput.addEventListener('change', (event) => {
  const file = event.target.files[0];
  const storageRef = storage.ref();
  const fileRef = storageRef.child(file.name);
  fileRef.put(file)
    .then((snapshot) => {
      console.log('File uploaded successfully!');
      // Get the download URL of the uploaded file
      fileRef.getDownloadURL()
        .then((url) => {
          console.log('Download URL:', url);
          // Display the uploaded image
          const imgElement = document.createElement('img');
          imgElement.src = url;
          document.body.appendChild(imgElement);
        })
        .catch((error) => {
          console.error('Error getting download URL:', error);
        });
    })
    .catch((error) => {
      console.error('Error uploading file:', error);
    });
});
