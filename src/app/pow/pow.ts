export function pow(x : number, n: number){
    let cont = 1;
    let aux = 1;

    if(n < 0){
        return 0;
    } else {
        while (cont <= n) {
            aux = aux * x;
            cont = cont + 1;
        } 
        return aux;
    }
}
