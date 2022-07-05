const input = process.argv.slice(2);

const sanitizedInput = [];

if (input.length === 0){
  return console.log("No beeps were scheduled!")
}

for (let element of input) {
  let temp = Number(element);

  if (temp >= 0) {
    sanitizedInput.push(temp);
  };
};

const sanitizedInputMilliseconds = sanitizedInput.map(element => element * 1000);

for (let beepTime of sanitizedInputMilliseconds){
setTimeout(() => process.stdout.write('\x07'), beepTime);
};