// This will be an ES5 Oriented library - use of prototypes instead of classes

// Create constructor
function easyHTTP() {
  this.http = new XMLHttpRequest();
}

// Four different prototype methods

// Make a HTTP GET REQUEST
easyHTTP.prototype.get = function(url, callback) {
  this.http.open('GET', url, true);

  let self = this;
  this.http.onload = function () {
    if (self.http.status === 200) {
      callback (null, self.http.responseText);
    } else {
      callback ('Error: ' + self.http.status);
    }
  }

  this.http.send();
}

// Make a HTTP POST REQUEST
easyHTTP.prototype.post = function(url, data, callback) {
  this.http.open('POST', url, true);

  // Setting the content type by setting a name of the header whose value is to be set.
  // setRequestHeader (name, value)
  this.http.setRequestHeader('Content-type', 'application/json');
  
  let self = this;
  this.http.onload = function () {
    // Doesn't need status as we're doing a post request

    // The responseText should be the new post that we added with the ID of 101
    callback (null, self.http.responseText);
  }

  // Data will be an object, so it's important to stringify (transform to JSON) the data in order to send it to the API
  this.http.send(JSON.stringify(data));
}

// Make a HTTP PUT REQUEST
easyHTTP.prototype.put = function(url, data, callback) {
  this.http.open('PUT', url, true);

  // Setting the content type by setting a name of the header whose value is to be set.
  // setRequestHeader (name, value)
  this.http.setRequestHeader('Content-type', 'application/json');
  
  let self = this;
  this.http.onload = function () {
    // Doesn't need status as we're doing a put request

    // The responseText should be the new post that we added with the ID of 101 (automatically added by API)
    callback (null, self.http.responseText);
  }

  this.http.send(JSON.stringify(data));
}
// Make a HTTP DELETE REQUEST
easyHTTP.prototype.delete = function(url, callback) {
  this.http.open('DELETE', url, true);

  let self = this;
  this.http.onload = function () {
    // Do check status for delete
    if (self.http.status === 200) {
      // responseText is going to be empty as we're using the delete method - so instead we're going to inform ourselves that the post has been deleted
      callback (null, 'Post Deleted');
    } else {
      callback ('Error: ' + self.http.status);
    }
  }

  this.http.send();
}