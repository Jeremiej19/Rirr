const DomainL = 0
const DomainR = 3
const eps = 10**-9

function BaseFunction( prev , xi , next ) {
    return function(t) {
        if( t > prev && t <= xi + eps ) {
            return (t-prev)/(xi-prev)
        }
        else if ( t > xi && t < next ) {
            return (next-t)/(next-xi)
        }
        else {
            return 0;
        }
    }
}

function BaseFunctionDerivative( prev , xi , next , h ) {
    return function(t) {
        if( t > prev && t <= xi + eps ) {
            return 1/h
        }
        else if ( t > xi && t < next  ) {
            return -1/h
        }
        else {
            return 0;
        }
    }
}

function defintegral( fn , a ,b ) {
    return gaussLegendre( fn, Math.max(a,DomainL), Math.min(b,DomainR) , 11 );
}

function eR(x) {
    if ( x > 2 ) {
        return 1;
    }
    else if ( x > 1 ) {
        return 5;
    }
    else if ( x >= 0 ) {
        return 10;
    }
}

function p(x) {
    return 1;
}

function _L(v,a,b) {
    return 5*v(0) - defintegral(x => { return p(x) * v(x)/eR(x) },a,b);
}
function Be0(v,dv,a,b) {
    return B( e0 ,v ,e0DX,dv,a,b);
}
function L(v,dv,a,b) {
    return _L(v,a,b) - 2*Be0(v,dv,a,b);
}

function B(u, v,du,dv, a,b) {
    return  u(0) * v(0) - defintegral(x => { return dv(x) * du(x) },a,b) //+ du(3) * v(3);
}

let e0 = NaN;
let e0DX = NaN;
function solveG(n,start,end) {
    let h = Math.abs(end-start)/n;
    // console.log("h " + h);
    let baseFuncs = Array(n);
    let baseFuncsDX = Array(n);
    for( let i = 0 ; i < n + 1 ;  ++i ) {
        baseFuncs[i] = (BaseFunction( start+h*(i-1), start+h*i, start+h*(i+1) ))
        baseFuncsDX[i] = (BaseFunctionDerivative( start+h*(i-1), start+h*i, start+h*(i+1) ,h))
    }
    e0 = baseFuncs[n-1];
    e0DX = baseFuncsDX[n-1];

    let Bmatrix = new Array(n-1);
    for (let i = 0; i < Bmatrix.length; i++) {
        Bmatrix[i] = new Array(n-1);
    }

    for (let i = 0; i < n-1; i++) {
        start = h*(i)
        end = h*(i+1)
        for (let j = 0; j < n-1; j++) {
            Bmatrix[i][j] = B(baseFuncs[i],baseFuncs[j],baseFuncsDX[i],baseFuncsDX[j],h*(i-1),h*(i)) + B(baseFuncs[i],baseFuncs[j],baseFuncsDX[i],baseFuncsDX[j],h*(i),h*(i+1))
        }
    }
    // console.log(Bmatrix);

    let Lmatrix = new Array(n-1);
    for (let i = 0; i < n-1; i++) {
        Lmatrix[i] = L(baseFuncs[i],baseFuncsDX[i], h*(i-1), h*(i)) + L(baseFuncs[i],baseFuncsDX[i], h*(i), h*(i+1))
    } 
    // console.log(Lmatrix);

    let Wmatrix = solve(Bmatrix, Lmatrix);
    // console.log(Wmatrix);

    points = new Array(n);
    
    for( let i = 0 ; i < n; ++i ){
        sum = 0
        for( let j = 0 ; j < n - 1 ; ++j ) {
            sum += Wmatrix[j]*baseFuncs[j](h*i);
        }
        points[i] = sum + 2*e0(h*i)
    }

    // console.log(points)
    
    return points

}