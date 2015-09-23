# Firehydrant.js

Abstraction layer on top of Firebase for operations like increment,
collection add, collection all (streaming).

## API

```js
var db = new Firehydrant(firebaseUrl);

db.increment('simple/counter');
db.add('collection', {properties: 'values'});
db.all('collection', function(item){});
```

## Rules

Recommended rules (not perfect):

```js
{
  "rules": {
    "collectionForAdd": {
        ".write": true
    },
    "collectionWithCounter": {
      ".read": true,
      "$member": {
        "counter": {
          ".write": "newData.isNumber() && newData.val() === data.val()+1"
        }
      }
    }
  }
}
```

## Contributing

Open to whatever.
