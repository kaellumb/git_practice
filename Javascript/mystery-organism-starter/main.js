let survivorDNA = [];

// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};


const pAequorFactory = (specimenNum, dna) => {
  return ({
    specimenNum,
    dna,
    mutate() {
      let newBase = returnRandBase();
      if (newBase != this.dna[0]) {
        this.dna[0] = newBase;
      } else this.mutate();
    },
    compareDNA(compare) {
      let comparePerc = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if(this.dna[i] === compare.dna[i]) {
          comparePerc ++;
        }
      }
      comparePerc = (comparePerc/this.dna.length) * 100;
      return `Specimen #${this.specimenNum} and Specimen #${compare.specimenNum} have ${comparePerc.toFixed(0)}% DNA in common.`;
    },
    willLikelySurvive() {
      let cCount = 0;
      let gCount = 0;
      for (let i = 0; i < this.dna.length; i++) {
        if (this.dna[i] === 'C') cCount ++;
        if (this.dna[i] === 'G') gCount ++;
      }
      if ((cCount / this.dna.length) * 100 >= 60 || (gCount / this.dna.length) * 100 >= 60) {
        return true;
      } else return false;
    }
  });
};

const populateDNA = (amount, arr) => {
  for(let i = 0; arr.length < amount; i++) {
    const survivor = pAequorFactory(i, mockUpStrand());
    if (survivor.willLikelySurvive() === true) {
      console.log('Created a survivor!');
      arr.push(survivor);
    }
  }
};

populateDNA(30, survivorDNA);