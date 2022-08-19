function DNAStrand(dna){

    
    //your code here
    var newDna = "";
    for(let i = 0; i < dna.length; i ++){
        if(dna[i] === "A"){
            newDna += dna[i].replace(/A/, 'T')
        };
        if(dna[i] === "T"){
            newDna += dna[i].replace(/T/, 'A')
        };
        if(dna[i] === "C"){
            newDna += dna[i].replace(/C/, 'G')
        };
        if(dna[i] === "G"){
            newDna += dna[i].replace(/G/, 'C')
        };

}
console.log(dna);
console.log(newDna);
}
  DNAStrand("TATC");

 