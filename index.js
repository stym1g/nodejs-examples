var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
}

function solveRect(l,b){
    console.log("Solving for rectange with l = "+l+" and breadth b = "+b);

    if(l<=0 || b<= 0){
        console.log("Rectange dimention should be greater than 0");
    }
    else{
        console.log("The area of rectange is "+rect.area(l,b));
        console.log("The area of perimeter of rectange is "+rect.perimeter(l,b));
    }
}

solveRect(2,4);
solveRect(0,3);
solveRect(5,9);
solveRect(4,0);
solveRect(0,0);