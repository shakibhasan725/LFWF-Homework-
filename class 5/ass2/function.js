
let getArea = ( shape, inf1, inf2) => {

     let area;
     let shape_n ;

     switch(shape){
          case('r'):
          area = inf1 * inf2 ;
          shape_n = 'Recrangle';
          break;

          case('s'):
          area = inf1 * inf1 ;
          shape_n = 'Squire' ;
          break;

          case('t'):
          area = 1/2 * (inf1*inf2);
          shape_n = 'Traingle';
          break;

          case('c'):
          area = 3.141592653589793 * (inf1 * inf1);
          shape_n ='Circle';
          break;
     
     }
     console.log(`The area of ${shape_n} is ${area}`);
   
}

