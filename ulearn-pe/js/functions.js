function loadAssignment(){
  populateLatestSubmission();
}

function populateLatestSubmission(){
  if(localStorage.getItem("latestSavedSubmission") === null){
    localStorage.setItem("latestSavedSubmission", "26/05/2017 11:23:46 AM");
  }
  document.getElementById('latestSubmission').innerHTML=localStorage.getItem("latestSavedSubmission");
}

function submitQuiz(){
  document.getElementById('submittedAlert').style.display="inline-block";

  var dateTimeString = new Date().toLocaleDateString('en-GB') + " " + new Date().toLocaleTimeString('en-US');
  document.getElementById('latestSubmission').innerHTML=dateTimeString;
  localStorage.setItem("latestSavedSubmission", dateTimeString);

  window.scrollTo(0,document.body.scrollHeight);
}

function submitReview(){
  document.getElementById('fredButton').style.display="none";
  document.getElementById('fredDisabledButton').style.display="inline";
  document.getElementById('reviewFred').style.display="none";
  document.getElementById('feedbackButton').style.display="inline";
  localStorage.setItem("reviewedFred", "1");

  var q1comment = document.getElementById('Q1comment').value;
  localStorage.setItem("Q1comment", q1comment);
}

function loadPR(){
  fredButtonDisplay();
}

function fredButtonDisplay(){
  if(localStorage.getItem("reviewedFred") === "1"){
    document.getElementById('fredButton').style.display="none";
    document.getElementById('fredDisabledButton').style.display="inline";
    document.getElementById('reviewFred').style.display="none";
    document.getElementById('feedbackButton').style.display="inline";
  } else {
    document.getElementById('fredButton').style.display="inline";
    document.getElementById('fredDisabledButton').style.display="none";
    document.getElementById('reviewFred').style.display="inline";
    document.getElementById('feedbackButton').style.display="none";
  }
}

function loadYourComment(){
  if(localStorage.getItem("Q1comment") == ""){
    localStorage.setItem("Q1comment", "This is the comment you left for Fred. It will show here.");
  }
  document.getElementById('yourComment').innerHTML = localStorage.getItem("Q1comment");
}
