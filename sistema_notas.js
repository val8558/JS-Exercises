/*function randomScore(min, max) {
    min = Math.ceil(0)
    max = Math.floor(100)
    return Math.floor(Math.random() * (max - min))
}
let score = randomScore(0, 100)


function getScore() {
    
    
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 89 && score <= 89
    let scoreD = score >= 60 && score <= 69
    let scoreC = score >= 70 && score <= 79
    let scoreF = score < 60 && score >= 0

    let scoreFinal;

    if (scoreA){
        scoreFinal = "A";}

    else if(scoreB){
        scoreFinal = "B";} 
       
    else if(scoreC){
        scoreFinal = "C";}
    
    else if(scoreD){
        scoreFinal = "D";}

    else if(scoreF){
        scoreFinal = "F";
    }  
    else {scoreFinal = "nota invalida"}
    
    return scoreFinal
}

console.log(getScore(score))*/