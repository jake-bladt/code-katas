siteCode = ->

siteCode.rangeMap = [
	{min: 0,      max: 999,       displayClass: 'reading0k'},
	{min: 1000,   max: 1999,      displayClass: 'reading1k'},
	{min: 2000,   max: 2999,      displayClass: 'reading2k'},
	{min: 3000,   max: 3999,      displayClass: 'reading3k'},
	{min: 4000,   max: 4999,      displayClass: 'reading4k'},
	{min: 5000,   max: 5999,      displayClass: 'reading5k'},
	{min: 6000,   max: 6999,      displayClass: 'reading6k'},
	{min: 7000,   max: 7999,      displayClass: 'reading7k'},
	{min: 8000,   max: 8999,      displayClass: 'reading8k'},
	{min: 9000,   max: 9999,      displayClass: 'reading9k'},
	{min: 10000,  max: 9999999,   displayClass: 'reading10k'}
];

siteCode.getDisplayClass = (stepCount) => 
  dClass = null;
  siteCode.rangeMap.map (range) =>
    if stepCount >= range.min && stepCount <= range.max 
      dClass = range.displayClass

  if !dClass 
    dClass = 'reading10k'
  return dClass
