function getData(){
  setTimeout(() => {
    console.log('always...');
  }, 2000);

}

async function another(){
  const da = await getData()
  console.log(da);

 console.log('get...1');
 console.log('get...5');
 console.log('get...2');
 console.log('get...3');
}
another();

let num1 = [233,133,533,223,667,896,200,100,300];

for(let i=0; i<num1.length; i++){
  let off = num1[i] / 10;
  num1[i] -= off;
  console.log(`this is your offer price = ${num1[i]}`);
}

let num2 = [144,200,400,366,455,209,405,500,650,460];
let i = 0;

for(let val of num2){
  console.log(`this is your price = ${val}`);
  let off = val / 10;
  num2[i] = num2[i]-off;
  console.log(`this is your offer price = ${num2[i]}`);
  i++;
  
}
