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