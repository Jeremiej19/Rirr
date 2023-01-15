var graph 

document.querySelector("#start").addEventListener( "click", e => {
    let n = Number(document.querySelector("#amount").value)
    if( n == 0 ) {
        n += 10
    }    
    start(n)
} );

function start(n) {
    if( graph != undefined ) {
        graph.destroy()
    }
    const canvas = document.querySelector("canvas");
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // let n = 10;
    labels = new Array(n);
    h = 3/n;
    for( let i = 0 ; i < n+1 ; ++i ) {
        labels[i] = Math.round(h*i*10)/10
    }
    console.log(labels)
    // solveG(10,0,3)
    
    // console.log(...Array(n).keys())
    
    graph = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [...labels],
            datasets: [
                {
                    label: "Φ(x)",
                    borderColor: "rgba(75, 192, 192, 6)",
                    data: solveG(n+1,0,3),
                    fill: false,
                    // tension: 0.3
                    tension: 0.3
                }
            ]
            
        }
    })
    
}


