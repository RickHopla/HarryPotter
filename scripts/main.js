import "../styles/style.css";

import * as d3 from "d3";

console.log("Hello, world!");

var width = 400;
var height = 400;
var radius = Math.min(width, height) / 2;

var color = d3.scaleOrdinal().range(["#586fae", "#813133"]);

var arc = d3
  .arc()
  .outerRadius(radius - 10)
  .innerRadius(0);

var pie = d3
  .pie()
  .sort(null)
  .value(function (d) {
    return d.value;
  });

var svg = d3
  .select("#piechart")
  .append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
  .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

var updatePiechart = function (data) {
  svg.selectAll("*").remove();

  var g = svg
    .selectAll(".arc")
    .data(pie(data))
    .enter()
    .append("g")
    .attr("class", "arc");

  g.append("path")
    .attr("d", arc)
    .style("fill", function (d) {
      return color(d.data.key);
    });
};

d3.select("#Gryffindor").on("click", function () {
  fetch(
    "https://opensheet.elk.sh/1Ok-ro9U9OMqpkiS9MBbVTvh0z2wtpG-nngfIWwvYcoo/Blad1"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      updatePiechart([
        { key: "Male", value: data[0].Gryffindor },
        { key: "Female", value: data[1].Gryffindor },
      ]);
    });
});

d3.select("#Slytherin").on("click", function () {
  fetch(
    "https://opensheet.elk.sh/1Ok-ro9U9OMqpkiS9MBbVTvh0z2wtpG-nngfIWwvYcoo/Blad1"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      updatePiechart([
        { key: "Male", value: data[0].Slytherin },
        { key: "Female", value: data[1].Slytherin },
      ]);
    });
});

d3.select("#Hufflepuff").on("click", function () {
  fetch(
    "https://opensheet.elk.sh/1Ok-ro9U9OMqpkiS9MBbVTvh0z2wtpG-nngfIWwvYcoo/Blad1"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      updatePiechart([
        { key: "Male", value: data[0].Hufflepuff },
        { key: "Female", value: data[1].Hufflepuff },
      ]);
    });
});

d3.select("#Ravenclaw").on("click", function () {
  fetch(
    "https://opensheet.elk.sh/1Ok-ro9U9OMqpkiS9MBbVTvh0z2wtpG-nngfIWwvYcoo/Blad1"
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      updatePiechart([
        { key: "Male", value: data[0].Ravenclaw },
        { key: "Female", value: data[1].Ravenclaw },
      ]);
    });
});

d3.select("#Gryffindor").dispatch("click");
