class Instrument {
  constructor(family, verb, loudness) {
    this.family = family;
    this.verb = verb;
    this.loudness = loudness;
  }
  log() {
    console.log(`${this.family} ${this.verb} at a ${this.loudness}/10`);
  }
}

class Woodwind extends Instrument {
  constructor(family, verb, loudness) {
    super(family, verb, loudness);
  }
}
class Percussion extends Instrument {
  constructor(family, verb, loudness) {
    super(family, verb, loudness);
  }
}
class Stringed extends Instrument {
  constructor(family, verb, loudness) {
    super(family, verb, loudness);
  }
}
var instrumentArray = [
  new Woodwind("Alto-saxaphone", "warm", "5"),
  new Percussion("Drums", "metallic", "8.5"),
  new Stringed("Violin", "eloquent", "5"),
  new Woodwind("Clarinet", "soft", "3"),
  new Stringed("Guitar", "jazzy", "6"),
];

instrumentArray.forEach((instrument) => {
  instrument.log();
});
