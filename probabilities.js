/***************************************************************************
 * Paul Davis - Farkle Probabilities
 * Created on: 6/11/19
 * 
 * Last Updated: 6/12/19
 * 
 * 
 * In Farkle, the following probabilities are useful for decision making
 * 
 * The probability of rolling a 1 or a 5 with 1-6 dice.
 * The pobability of rolling 3 of a kind with 3-6 dice.
 *      **should there be any overlap with the 4 of a kind possibilities?
 * The probability of rolling 4 of a kind with 4-6 dice.
 * The probability of rolling 5 of a kind with 5-6 dice.
 * The probability of rolling 6 of a kind with 6 dice.
 * The probability of rolling 4 of a kind + 1 pair with 6 dice.
 * The probability of rolling 2 sets of 3 of a kind.
 * The probability of rolling a straight.
 * 
 * *************************************************************************/


function dicePopulation(numDice){           //accepts the number of dice as a parameter and return an array of all of the permutation in the population.
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
}       //end function dicePopulation(numDice)

function straight(){    //generates an array with all of the permutations of a straight with 6 dice (720)
    var straight = [0]; //initialize the array
    straight.pop();     //remove the initialized value

    for(a=1;a<7;a++){
        for(b=1;b<7;b++){
            for(c=1;c<7;c++){
                for(d=1;d<7;d++){
                    for(e=1;e<7;e++){
                        for(f=1;f<7;f++){
                            var dup = true;
                            
                            while(dup==true){
                                if(b==a){b++;}
                                else if(c==b||c==a){c++;}
                                else if(d==c||d==b||d==a){d++;}
                                else if(e==d||e==c||e==b||e==a){e++;}
                                else if(f==e||f==d||f==c||f==b||f==a){f++;}
                                else{dup=false;};
                            }
                            
                            if(a>6||b>6||c>6||d>6||e>6||f>6){
                                break}
                            else{
                                straight.push([a,b,c,d,e,f]);
                            };

                        }
                    }
                }
            }
        }
    }

    return straight;
}

function arrayExamine(arryMatch, arryPop){        //accepts arrayMath - the matching permutaions, and counds how many matches there are in the population
    var match=0;

    for(x=0;x<arryMatch.length;x++){              //loop through each element of the Match array

        for(y=0;y<arryPop.length;y++){            //loop through each element of the Population array
            if(JSON.stringify(arryMatch[x])==JSON.stringify(arryPop[y])){            //compare the elements of each array
                match++
            }

            //console.log(arryMatch[x]+' '+arryPop[y]+' '+match);        
        }
    }
    return match;
}

//console.log(JSON.stringify(population_6_dice));

//console.log(population_6_dice.length);


//for(a=0,b=0;a<10,b<10;a++,b++){
//    console.log(a,b);
//}

var arryStraight=straight();
var arryPop6=dicePopulation(6);

var cntStraight=arrayExamine(arryStraight,arryPop6);

console.log(cntStraight);


