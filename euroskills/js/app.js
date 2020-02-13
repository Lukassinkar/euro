async function call() {
  const data = await fetch(
    "http://localhost/euroskills/data/easing-functions-all.json"
  ).then(res => res.json());

  console.log(data);
}

call();

// const req = new XMLHttpRequest();
// req.onload = function() {
//   const text = req.responseText;
//   // Do something with text...
// };
// req.open("GET", "data/easing-functions-all.json");
// req.send();

// var chart = new Chart(ctx, {
//   // The type of chart we want to create
//   type: "bubble",

//   // The data for our dataset
//   data: {
//     datasets: [
//       {
//         label: "A",
//         backgroundColor: "transparent",
//         borderColor: "rgb(255, 99, 132)",
//         data: [
//           {
//             x: 1.5,
//             y: 50
//           }
//         ]
//       },
//       {
//         label: "B",
//         backgroundColor: "transparent",
//         borderColor: "rgb(255, 99, 132)",
//         data: [
//           {
//             x: 1.5,
//             y: 80
//           }
//         ]
//       }
//     ]
//   },

//   // Configuration options go here
//   options: {
//     legend: {
//       display: false
//     },
//     scales: {
//       yAxes: [
//         {
//           ticks: {
//             min: 0,
//             max: 100
//           }
//         }
//       ],
//       xAxes: [
//         {
//           ticks: {
//             min: 0,
//             max: 3
//           }
//         }
//       ]
//     }
//   }
// });
