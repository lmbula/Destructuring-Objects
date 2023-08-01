// faster/easier way to access/unpack values from arrays

const bob = {
  first: "bob",
  last: "sanders",
  city: "chicago",
  siblings: {
    sister: "jane",
  },
};

// const firstName = bob.first;
// const lastName = bob.last;
// const sister = bob.siblings.sister;
// console.log(firstName, lastName, sister);

const { first, last, city } = bob;
console.log(first, last, city);

function destructureobject(person) {
  const{first, last, city,siblings:{sister}} = person;
  console.log(first, last, city,sister);
}
destructureobject(bob);

function destructureinArgument({ first, last, city, siblings: { sister } }) {
 console.log(first, last, city, sister);
}
destructureinArgument(bob);

