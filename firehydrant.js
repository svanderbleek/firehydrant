var Firehydrant = function(firebaseUrl) {
  this.fb = new Firebase(firebaseUrl);
  return this;
};

Firehydrant.prototype.increment = function(counter) {
  var counterRef = this.fb.child(counter);
  return counterRef.transaction(function(value) {
    return (value || 0) + 1;
  });
};

Firehydrant.prototype.add = function(collection, object) {
  var addRef = this.fb.child(collection).push();
  return addRef.set(object);
};
