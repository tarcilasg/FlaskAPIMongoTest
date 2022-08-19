// Runs only after Database creation: populates database
//db aqui é o construído pelo MongoDB
db = db.getSiblingDB("animal_db");

// Drop Existing Animal "Table"
db.animal_tb.drop();

// Recreate Animal "Table"
//cria a coleção
db.animal_tb.insertMany([
  {
    id: 1,
    name: "Lion",
    type: "Wild",
  },
  {
    id: 2,
    name: "Cow",
    type: "Domestic",
  },
]);
