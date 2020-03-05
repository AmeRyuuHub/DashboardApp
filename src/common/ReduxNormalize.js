
   

export const lower = value => value && value.replace(/[-: )(]/g,'').toLowerCase();

export const macPattern = (value, previousValue) =>
(new RegExp("[0-9A-Fa-f]{"+value.length+",}", "g")).test(value) ? value : previousValue
