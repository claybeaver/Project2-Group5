function buildGraph(sample) {
  const url = "/maxwinds";
  d3.json(url).then(function(data){
    console.log(data);
    const names = data.map(entry => entry.name_year);
    const maxwind = data.map(entry => entry.max_wind);
    console.log(names);
    console.log(maxwind);    
 
    const title = `Maximum winds`;
    const trace = {
      x: maxwind,
      y: names,
      type: 'bar',
      orientation: 'h',
      title: title,
      text: maxwind,
    };
    var data = [trace];
    var layout = {
      title: {
        text: title,
        font: {
          size: 12
        },
      }, 
      font: {
        size: 8,
      },
      xaxis: { title: "Maximum winds" },
      // yaxis: maxwind,
      width: 400,
      margin: {
        l: 100,
        r: 10,
        b: 100,
        t: 100,
        pad: 10}
    };
    Plotly.newPlot("plot", data, layout);
  })
  // console.log("--- Graph built ---");
};

buildGraph();

function buildCostStateGeoMap(sample) {
  const url = "/cost_by_state";
  d3.json(url).then(function(data){
    console.log(data);
    // const names = data.map(entry => entry.name_year);
    // const maxwind = data.map(entry => entry.max_wind);
    // console.log(names);
    // console.log(maxwind);    
 
    // const title = `Maximum winds`;
    // const trace = {
    //   x: maxwind,
    //   y: names,
    //   type: 'bar',
    //   orientation: 'h',
    //   title: title,
    //   text: maxwind,
    // };
    // var data = [trace];
    // var layout = {
    //   title: {
    //     text: title,
    //     font: {
    //       size: 12
    //     },
    //   }, 
    //   font: {
    //     size: 8,
    //   },
    //   xaxis: { title: "Maximum winds" },
    //   // yaxis: maxwind,
    //   width: 400,
    //   margin: {
    //     l: 100,
    //     r: 10,
    //     b: 100,
    //     t: 100,
    //     pad: 10}
    // };
    // Plotly.newPlot("plot", data, layout);
  })
  // console.log("--- Graph built ---");
};

buildCostStateGeoMap();

// function buildPlot() {
//   /* data route */
//   const url = "/jsondata";
//   d3.json(url).then(function(response) {

//     console.log(response);

//     const data = response;

//     const layout = {
//       scope: "usa",
//       title: "Costliest Hurricanes in Atlantic",
//       showlegend: false,
//       height: 600,
//             // width: 980,
//       geo: {
//         scope: "usa",
//         projection: {
//           type: "albers usa"
//         },
//         showland: true,
//         landcolor: "rgb(217, 217, 217)",
//         subunitwidth: 1,
//         countrywidth: 1,
//         subunitcolor: "rgb(255,255,255)",
//         countrycolor: "rgb(255,255,255)"
//       }
//     };

//     Plotly.newPlot("plot", data, layout);
//   });
// }

// buildPlot();
