const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let n = 10;
solveG(10,0,3)

// console.log(...Array(n).keys())

let graph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [...Array(n).keys()],
        datasets: [
            {
                label: "f(x) = x",
                borderColor: "rgba(75, 192, 192, 6)",
                data: [...Array(n).keys()],
                fill: false,
                // tension: 0.3
                tension: 0
            }
        ]
        
    }
})
