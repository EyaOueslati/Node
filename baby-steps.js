let sum=0;
for (let i = 2 ; i< process.argv.length ; i++){
    sum = Number( sum + process.argv[i]);
    }
    console.log(sum);