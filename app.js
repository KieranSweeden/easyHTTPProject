const http = new easyHTTP;

// Get Posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts){

//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Get Single Post
// http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, posts){

//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// Create Data (Using names from JSON file from API) - The REST API adds an ID for us
const data = {
  title: 'Custom Post',
  body: 'This is a custom post'
};

// Create Post (Look at documentation - same as get, but it's okay as we're using a different method)
// http.post('https://jsonplaceholder.typicode.com/posts', data, function(err, post){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Update post (put) (notice the /1 at the end of url, we're updating a post at ID index 1)
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function(err, post){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Updating post at position 5
// http.put('https://jsonplaceholder.typicode.com/posts/5', data, function(err, post){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// Delete post
http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response){

  if (err) {
    console.log(err);
  } else {
    console.log(response);
  }
});