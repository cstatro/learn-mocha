function helloWorld() {
  return "Hello there";
}

function formatName(str) {
  let splitName = str.split(",");
  splitName[1] = splitName[1].trim();
  return `${splitName[1]} ${splitName[0]}`;
}

module.exports = {
  helloWorld: helloWorld,
  formatName: formatName
};
