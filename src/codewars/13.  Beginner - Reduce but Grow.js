function grow(x){
    return x.reduce(function(product, n){
        return product * n;
    }, 1)
}