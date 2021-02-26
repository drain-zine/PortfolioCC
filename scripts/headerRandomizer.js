$(document).ready(function (){
    
    var page = $(this).attr('title');
    console.log(page != "Portfolio");

    // struct = [ [navX, navY], [titleCardX, titleCardY] ], origin @ top left pixel.
    var defaultOffset = [  [0,8], 
                            [15,0]  ];                    

    var delta = [   [0,0], 
                    [0,0]  ]; 

    var finalOffset = [   [0,0], 
                          [0,0]  ]; 

    var deltaRange = [   [8,10], 
                         [8,10]  ]; 


    // Apply randomisation only on non main pages
    
    // Construct offset array
    if(page !== "Portfolio"){
        for(var y = 0; y < 2; y++){
            for(var x = 0; x < 2; x++){
                delta[x][y] = getRandomIntInclusive(0,deltaRange[x][y]);
                finalOffset[x][y] = delta[x][y]; // org + default
            }
        }
    }else{
        for(var y = 0; y < 2; y++){
            for(var x = 0; x < 2; x++){
                finalOffset[x][y] = defaultOffset[x][y]; // org + default
            }
        }
    }
    

    /* if(finalOffset[0][0] == finalOffset[0][1])
        finalOffset[0][1] += (Math.round(Math.random()) * 2 - 1)*Math.rdeltaRange[0][1]/4 */
       


     // Apply
     $("nav").addClass("ml-" + finalOffset[0][0].toString() + " mt-"+ finalOffset[0][1].toString());
     $(".titleCard").addClass("ml-" + finalOffset[1][0].toString() + " mt-"+ finalOffset[1][1].toString());

    // generic func
    function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
      }
});