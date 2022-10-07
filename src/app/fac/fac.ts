export function fac(x:number) {
    let aux=1;
    let fact=1;
    if (x==0) {
        return 0;
    } else { if (x<0) {
        return 0;
    }else{
        if (x>16) {
            return 0;
        }else{
            while (aux<=x) {
                fact=fact*aux;
                aux++;
            }
            return fact;
        }
    }
        
    }
}