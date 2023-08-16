let fetchRequest = fetch("data.json");
let category = document.querySelectorAll(".grading-category");
let icon;
let score;
var right_floated_scores = document.querySelectorAll(".right-floated");

let i = 0;

fetchRequest
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    data.forEach((data) => {
      let right_floated_scores_child_span = right_floated_scores[i];
      right_floated_scores_child_span.children[0].innerHTML = data["score"];
      category[i].innerHTML = data.category;
      i++;
    });
  });
