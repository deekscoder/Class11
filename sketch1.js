var marks = [30,40,45,35];
var average_marks, sum


function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background("white");
  marks_average();
}

function marks_average()
{
  sum = 0; 
    for(var i = 0; i<marks.length; i= i+1)
      {
        sum = sum + marks[i];
      }
      average_marks = sum/marks.length;
  text("Average is "+average_marks, 100,100);
}