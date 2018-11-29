let trainedNet;

function encode(arg) {
 return arg.split("").map(x => x.charCodeAt(0) / 256);
}

function processTrainingData(data) {
 return data.map(d => {
   return {
     input: encode(d.input),
     output: d.output
   };
 });
}

function train(data) {
 let net = new brain.NeuralNetwork();
 net.train(processTrainingData(data));
 trainedNet = net.toFunction();
}

function execute(input) {
 console.log(input.elements[0].value);
 let results = trainedNet(encode(input.elements[0].value));
 console.log(results);
 let output;
 let percent;
 if (results.trump > results.kardashian) {
   output = "Donald Trump";
   percent = Math.floor(results.trump * 100);
 } else {
   output = "Kim Kardashian";
   percent = Math.floor(results.kardashian * 100);
 }

 alert(`We're ${percent}% certain that written by ${output}`);
}

train(trainingData);
console.log(execute("Paste your tweet here"));