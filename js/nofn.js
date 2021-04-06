function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

var story = 5;

var data = { 
  "Kristjana Björk Barðdal": 31 + story,
  "Júlía Sif": 7,
  "Valgerður Lára": 1,
  "Erlen Anna": 7,
  "Helgi Freyr Ásgeirsson": 6 + story,
  "Kristbjörg María": 5,
  "Páll Ásgeir": 1,
  "Ingvi Steinn Waage": 4,
  "Aggi Pó": 2,
  "Ísak Arnar Kolbeins": 1,
  "Ástríður Stefánsdóttir": 1,
  "Jóhann Embla": 13,
  "Tómas Þórir Tómasson": 9 + story,
  "Friðrik Árni Halldórsson": 3,
  "Sigurður Þór Thorsteinssen": 2 + story,
  "Kristófer Víðir": 1,
  "Elín Metta": 1,
  "Þorsteinn Hjörleifsson": 1,
  "Olga Guðnadóttir": 1,
  "Sara Björk": 1 + story,
  "Ída Logadóttir": 2,
  "Karen Harðardóttir": 4,
  "Sólrún Sif": 1,
  "Sveinn Svampsted": 1,
  "Didda - Ásthuldur Guðmundsdóttir": 1,
  "Benedikt Arnar": 1,
}

var full_list = [];

for (let key in data) {
  for (let i = 0; i < data[key]; i++){
      full_list.push(key);
  }
}


console.log(full_list)

var nofn = shuffle(full_list);
console.log(nofn);