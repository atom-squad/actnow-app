import { LEVELS } from "./constants";

export const updateValues = (target, source, keys?) => {
    if (!source) return;
    
    if(Array.isArray(target)){
        target.splice(0, target.length, ...source)
        return;
    }

    (keys || Object.keys(target)).forEach((key) => {
      if (source[key] !== undefined) {
        target[key] = source[key];
      }
    });
};

export const formatDate = (date) => {
  var tDate = new Date(date);
  const MONTHS = [
    'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec',
  ];
  var str = `${tDate.getDate()} ${MONTHS[tDate.getMonth()]}, ${tDate.getFullYear()}`;
  
  return str;
}

export const getUserLevel = (points) => {
  for(let level of LEVELS){
    if(points <= level.endLimit){
      return level;
    }
  }
  return LEVELS[0];
}