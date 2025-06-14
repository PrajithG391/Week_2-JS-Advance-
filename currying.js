let b= function(a){
    return function(c){
        let sum =a * c
        return sum;
    }
}
console.log(b(3)(5))