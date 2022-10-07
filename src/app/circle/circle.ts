export function circle(r:number) {
    let result=0;
    if (r==0) {
        return 0;
    } else {if (r<0) {
        return 0 ;
    }else{
        return result =3.1416 * Math.pow(r,2);
    }
    }
    
}