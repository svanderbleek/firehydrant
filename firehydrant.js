var Firehydrant = function(firebaseUrl) {
  this.fb = new Firebase(firebaseUrl);
  return this;
};

Firehydrant.prototype.increment = function(counter) {
  var counterRef = this.fb.child(counter);
  counterRef.transaction(function(value) {
    return (value || 0) + 1;
  });
};

Firehydrant.prototype.add = function(collection, object) {
  var addRef = this.fb.child(collection).push();
  addRef.set(object);
};

Firehydrant.prototype.all = function(collection, callback) {
  var allRef = this.fb.child(collection);
  allRef.on('child_added', function(snapshot) {
    var item = snapshot.val();
    item.key = snapshot.key();
    callback(item);
  });
};
