function numberOfBottles() {
  let count = 99;

  while (count > 0) {
    let bottleWord = count === 1 ? 'bottle' : 'bottles';

    console.log(`${count} ${bottleWord} of beer on the wall.`);
    console.log(`${count} ${bottleWord} of beer.`);
    console.log('Take one down, pass it around.');

    count--;

    let nextBottleWord = count === 1 ? 'bottle' : 'bottles';
    if (count > 0) {
      console.log(`${count} ${nextBottleWord} of beer on the wall.`);
    } else {
      console.log('No more bottles of beer on the wall.');
    }

    console.log(''); // Blank line for readability
  }
}

numberOfBottles();
