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

function createBaseFunctionDerivative( prev , xi , next , h ) {
    return function(t) {
        if( t > prev && t <= xi ) {
            return 1/h
        }
        else if ( t > xi && t < next) {
            return -1/h
        }
        else {
            return 0;
        }
    }
}

function defintegral( fn , a ,b  ) {
    return gaussLegendre( fn, a, b , 3 );
}

function eR(x) {
    return 10;
}

function p(x) {
    return 1;
}

function L(v,a,b) {
    return defintegral(x => { return v(x) * p(x)/eR(x) },a,b) + 5*v(0);
}

function B(u, v,du,dv, a,b) {
    return  u(0) * v(0) - defintegral( x => { du(x)*dv(x) }, a, b);
}

function solve(n,start,end) {
    let h = Math.abs(end-start)/n;
    console.log("h" + h);
    let baseFuncs = Array(n);
    for( let i = 0 ; i < n ;  ++i ) {
        baseFuncs[i] = (createBaseFunction( start+h*(i-1), start+h*i, start+h*(i+1) ))
    }
    console.log(baseFuncs);

    let Bmatrix = new Array(n);
    for (let i = 0; i < Bmatrix.length; i++) {
        Bmatrix[i] = new Array(n);
    }

    let Lmatrix = new Array(n);
    for (let i = 1; i < Lmatrix.length-1; i++) {
        
    } 

}