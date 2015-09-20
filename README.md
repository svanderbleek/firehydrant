# Firehydrant.js

Abstraction layer on top of Firebase for operations like increment and
collection add.

## API

```js
var db = new Firehose(firebaseUrl);

db.increment('simple/counter');
db.incrementCollectionMember('collection', memberQuery, counterProperty);

db.addCollectionMember('collection', {properties: 'values'});
```

## Contributing

Open to whatever.