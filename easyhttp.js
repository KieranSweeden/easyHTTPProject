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

// Make a HTTP PUT REQUEST

// Make a HTTP DELETE REQUEST