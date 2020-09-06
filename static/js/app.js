function buildGraph(sample) {
  const url = "/jsondata";
  d3.json(url).then(function(data){
    console.log(data);
    const names = data.map(entry => entry.name);
    const maxwind = data.map(entry => entry.max_wind);
    console.log(names);
    console.log(maxwind);    

    console.log(Math.max(maxwind));
    
    // data.forEach((entry, i) => {
    //   console.log(entry.name);
    // })

    const title = `Maximum winds`;
    const trace = {
      x: names,
      y: maxwind,
      type: 'bar',
      orientation: 'h',
      title: title,
      text: names,
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
      yaxis: maxwind,
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

function buildPlot() {
  /* data route */
  const url = "/jsondata";
  d3.json(url).then(function(response) {

    console.log(response);

    const data = response;

    const layout = {
      scope: "usa",
      title: "Costliest Hurricanes in Atlantic",
      showlegend: false,
      height: 600,
            // width: 980,
      geo: {
        scope: "usa",
        projection: {
          type: "albers usa"
        },
        showland: true,
        landcolor: "rgb(217, 217, 217)",
        subunitwidth: 1,
        countrywidth: 1,
        subunitcolor: "rgb(255,255,255)",
        countrycolor: "rgb(255,255,255)"
      }
    };

    Plotly.newPlot("plot", data, layout);
  });
}

// buildPlot();
