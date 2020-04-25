const getSleepHours = day => {
  day = day.toLowerCase();
  switch(day) {
    case 'monday':
      return 7;
      break;
    case 'tuesday':
      return 5;
      break;
    case 'wednesday':
      return 6;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 7;
      break;
    case 'sunday':
      return 8;
      break;
  }   
}

//console.log(getSleepHours('wednesdaY'))

const getActualSleepHours = () => {
  return getSleepHours('monday') + getSleepHours('tuesday') + getSleepHours('wednesday') + getSleepHours('thursday') + getSleepHours('friday') + getSleepHours('saturday') + getSleepHours('sunday');
}

//console.log(getActualSleepHours())

const getIdealSleepHours = (idealHours = 8) => {
  return idealHours * 7
}

//console.log(`My ideal amount of sleep is ${getIdealSleepHours()} hours a week. I have gotten ${getActualSleepHours()} hours of sleep in the last week.`)

const calculateSleepDebt = (idealHours = 8) => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours(idealHours);
  if(actualSleepHours === idealSleepHours) {
    console.log(`You got the perfect amount of sleep, ${actualSleepHours/7} hours average out of ${idealSleepHours/7} hours average!`);
  } else if(actualSleepHours > idealSleepHours) {
    console.log(`You got more sleep than needed, ${actualSleepHours/7} hours average out of ${idealSleepHours/7} hours average!`);
  } else if(actualSleepHours < idealSleepHours) {
    console.log(`You should get some more sleep, you only got ${actualSleepHours/7} hours average out of ${idealSleepHours/7} hours average!`);
  }
}

calculateSleepDebt(1)
