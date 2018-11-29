let trainedNet;

function encode(arg){
    return arg.split('').map(x => (x.charCodeAt(0) / 255));
}

function processTrainingData(data) {
    return data.map(d => {
        return {
            input: encode(d.input),
            output: d.output
        }
    })
}

function train(data){
    let net = new brain.NeuralNetwork();
    net.train(processTrainingData(data));
    trainedNet = net.toFunction();
    alert('Finished training');
};

train(trainingData)

function execute(input){
    let results = trainedNet(encode(input));
    let output;
    results.trump > results.kardashian ? output = "Trump" : output = "Kardashian";
    return output;
}

// function myFunction(input){
//     return execute(input)
// } 


console.log(execute("These aren't real. Kanye would never write Yeezy on the side"));

console.log(execute("lock her up! Best ever"))
