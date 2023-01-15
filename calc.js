function createBaseFunction( prev , xi , next ) {
    return function(t) {
        if( t > prev && t <= xi ) {
            return (t-prev)/(xi-prev)
        }
        else if ( t > xi && t < next) {
            return (next-t)/(next-xi)
        }
        else {
            return 0;
        }
    }
}

function solve(n,start,end) {
    let h = Math.abs(end-start)/n;
    console.log("h" + h);
    let baseFuncs = Array(n);
    for( let i = 1 ; i < n - 1 ;  ++i ) {
        baseFuncs[i] = (createBaseFunction( start+h*(i-1), start+h*i, start+h*(i+1) ))
    }
    console.log(baseFuncs);
    console.log(baseFuncs);
}