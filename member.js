function skillsMember() {
  var member = document.getElementById("member");
  var skills = document.getElementById("skills");
  var skillsContent = document.getElementById("skills-content");
  var skillsImage = document.getElementById("skills-image");

  if (member.style.display === "none") {
    member.style.display = "block";
    skills.style.display = "none";
    skillsContent.style.display = "none";
    skillsImage.style.display = "none";
  } else {
    member.style.display = "none";
    skills.style.display = "block";
    skillsContent.style.display = "block";
    skillsImage.style.display = "block";
  }
}