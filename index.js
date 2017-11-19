// Write your solution in this file!
const driver = {
  name: 'Sam'
};

function updateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign({}, driver, {[key]:value});
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  return Object.assign(driver, {name: 'Sam', address: '12 Broadway'});
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  return delete newDriver.name;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  return delete driver.name;
}
