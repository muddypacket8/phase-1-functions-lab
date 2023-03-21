function distanceFromHqInBlocks(block) {
    if (block > 42) {
      return block - 42;
    } else {
      return 42 - block;
    }
  }
  
  function distanceFromHqInFeet(block) {
    return distanceFromHqInBlocks(block) * 264;
  }
  
  function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
      return (destination - start) * 264;
    } else {
      return (start - destination) * 264;
    }
  }
  
  function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;
    if (distance <= 400) {
      fare = 0;
    } else if (distance > 400 && distance <= 2000) {
      fare = (distance - 400) * 0.02;
    } else if (distance > 2000 && distance = 2500) {
      fare = 25;
    } else {
      return 'cannot travel more than 2500 feet';
    }
    return fare;
  }
  
