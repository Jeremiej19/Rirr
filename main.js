const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");

let n = 10;
solve(10,0,3)

console.log(...Array(n).keys())

let graph = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [...Array(n).keys()],
        datasets: [
            {
                label: "f(x) = x",
                borderColor: "rgba(75, 192, 192, 6)",
                data: [2,3,5,1,2],
                fill: false,
                // tension: 0.3
                tension: 0
            }
        ]
        
    }
})
