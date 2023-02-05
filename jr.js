const questions = [{
    'que': 'Which of the following markup language?',
      'a': 'HTML',
      'b': 'Css',
      'c': 'Javascript',
      'd': 'php',
      'correct':'a'
},

{
   'que': ' Which HTML tag is used to define a table??',
     'a': '<table> ',
     'b': "td",
     'c': '<tables>',
     'd': '<th>',
     'correct':'a'
},


{
 'que': ' The tag for the table data is ?',
   'a': '<p>',
   'b': "<th>",
   'c': '<td>',
   'd': '<tr>',
   'correct':'c'
}


]
let index = 0;
let total = questions.length;
let right = 0;
   wrong = 0;
const optionInputs = document.querySelectorAll('.option')
const quesBox = document.getElementById('quesBox')
const loadQuestion = () => {
 if(index === total){
   return endquiz()
 }

 reset();
const data = questions[index]
//  console.log(data)
quesBox.innerText = ` ${index + 1}) ${ data.que}`;
optionInputs[0].nextElementSibling.innerText = data.a;
optionInputs[1].nextElementSibling.innerText = data.b;
optionInputs[2].nextElementSibling.innerText = data.c;
optionInputs[3].nextElementSibling.innerText = data.d;

}
const submitQuiz = () => {
 const data = questions[index];
 const ans = getAnswer()
 if(ans === data.correct){
   right++;
 }else{
   wrong++;
 }
 index++;
 loadQuestion();
 return;

}
const getAnswer = () => {
 let answer;
 optionInputs.forEach(
   (input) => {
     if(input.checked){
       answer =  input.value;
       
     }
      }
 )
 return answer;
}

// funtiom reste

const reset = () => {
 optionInputs.forEach(
   (input) => {
     input.checked = false 
   }

 )
}

const endquiz = () => {

 document.getElementById("box").innerHTML = `
<h3> Thankyou for Playing  Quiz</h3>
<h2> ${right}/${total} are Correct  <?h2>`
}

//inital  call
loadQuestion();