// code your solution here
function saturdayFun(activity = 'roller-skate') {
    return `This Saturday, I want to ${activity}!`;
  }
  
  function mondayWork(task = 'go to the office') {
    return `This Monday, I will ${task}.`;
  }
  
  function wrapAdjective(flair = '*') {
    return function(adjective = 'special') {
      return `You are ${flair}${adjective}${flair}!`;
    };
  }
  
  console.log(saturdayFun()); // Output: This Saturday, I want to roller-skate!
  console.log(saturdayFun('hike')); // Output: This Saturday, I want to hike!
  
  console.log(mondayWork()); // Output: This Monday, I will go to the office.
  console.log(mondayWork('attend a meeting')); // Output: This Monday, I will attend a meeting.
  
  const encouragingPromptFunction = wrapAdjective('!!!');
  console.log(encouragingPromptFunction('a dedicated programmer')); // Output: You are !!!a dedicated programmer!!!
  
  const fancyPromptFunction = wrapAdjective('%');
  console.log(fancyPromptFunction('an awesome developer')); // Output: You are %an awesome developer%!