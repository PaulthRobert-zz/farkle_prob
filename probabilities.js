console.log('cats');

function dicePopulation(numDice){
    var population = [0];   //initialize with the array data type
    population.pop();       //remove the 0

    for(a=1;a<7&&numDice>0;a++){       //level 1
        for(b=1;b<7&&numDice>1;b++){       //level 2
            for(c=1;c<7&&numDice>2;c++){       //level 3
                for(d=1;d<7&&numDice>3;d++){       //level 4
                    for(e=1;e<7&&numDice>=4;e++){       //level 5
                        for(f=1;f<7&&numDice>5&&numDice<=6;f++){   //level 6
                            population.push([a,b,c,d,e,f]);
                        }   //end level 6
                        if(numDice==5){
                            population.push([a,b,c,d,e]);
                            }
                        }   //end level 5
                    if(numDice==4){                 
                        population.push([a,b,c,d]);
                    }
                }   //end level 4
            if(numDice==3){            
                population.push([a,b,c]);
                }
            }   //end level 3
         if(numDice==2){
             population.push([a,b]);
            }    
        }   //end level 2
        if(numDice==1){
            population.push([a]);
        }
    }   //end level 1 
    
    return population;
}


population_6_dice=dicePopulation(1);

console.log(JSON.stringify(population_6_dice));

console.log(population_6_dice.length);

