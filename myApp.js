require('dotenv').config();
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });

const conn = mongoose.connection
conn.on('connected', function() {
  console.log("mongoose connected")
})


const personSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: Number,
  favoriteFoods: [String]
})

let Person = mongoose.model('Person', personSchema);



const createAndSavePerson = (done) => {
  let person = new Person({ name: 'Mohammad Hifzan', age: 22, favoriteFoods: ['anything non veg', 'pizza'] })
  person.save(function(err, data) {
    if (err) return console.error(err)
    done(null, data)
  });
};

let people = [{ name: 'Mohammad Hifzan', age: 22, favoriteFoods: ['non-veg', 'fast-food'] },
{ name: 'Zaka Ali', age: 23, favoriteFoods: ['french fries'] },
{ name: 'Mohammad Humza', age: 26, favoriteFoods: ['butter chiken', 'chicken tikka'] },]


const createManyPeople = (arrayOfPeople, done) => {

  var people = Person.create(arrayOfPeople, function(err, data) {
    if (err) return console.error(err)
    done(null, data)
  })
};

const findPeopleByName = (personName, done) => {
  Person.find({ name: personName }, function(err, data) {
    if (err) return console.error(err)
    done(null, data)
  })
};


const findOneByFood = (food, done) => {
  Person.findOne({ favoriteFoods: food }, function(err, data) {
    if (err) return console.log(err)
    done(null, data)
  })
};

const findPersonById = (personId, done) => {
  Person.findById({ _id: personId }, function(err, data) {
    if (err) return console.error(err)
    done(null, data)
  })
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";
  Person.findById({ _id: personId }, function(err, person) {
    if (err) return console.error(err)
    person.favoriteFoods.push(foodToAdd)
    person.save(function(err, data) {
      if (err) console.log(err)
      done(null, data)
    })
  })
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";

  done(null /*, data*/);
};

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
