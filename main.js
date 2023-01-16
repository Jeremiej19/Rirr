var graph 

document.querySelector("#start").addEventListener( "click", e => {
    let n = Math.ceil(Number(document.querySelector("#amount").value))
    if( n <= 0 ) {
        return
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

    labels = new Array(n);
    h = 3/n;
    for( let i = 0 ; i < n+1 ; ++i ) {
        labels[i] = Math.round(h*i*100)/100
    }
    // console.log(labels)
    
    
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
                    tension: 0.4
                }
            ]
            
        }
    })
    
}


