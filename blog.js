// Toggle Dark Mode
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
  
    // Check if dark mode is enabled and update the toggle state accordingly
    const toggleSwitch = document.getElementById("toggle-dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      toggleSwitch.checked = true;  // Toggle switch should be checked in dark mode
    } else {
      toggleSwitch.checked = false; // Toggle switch should be unchecked in light mode
    }
  }
  
  // Scroll Smoothly to Contact Section
  document.querySelector('a[href="#contact"]').addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector("#contact").scrollIntoView({ behavior: "smooth" });
  });
  
  // Display Alert on "Read More"
  function showAlert() {
    alert("More content will be available soon!");
  }
  
  // Add Comments Dynamically
  document.querySelector("#comment-form").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const commentText = document.getElementById("comment-text").value;
    
    if (commentText) {
      const commentSection = document.getElementById("comment-section");
      
      // Create new comment div
      const newComment = document.createElement("div");
      newComment.classList.add("comment");
      
      // Add the text content of the comment
      const commentParagraph = document.createElement("p");
      commentParagraph.textContent = commentText;
      newComment.appendChild(commentParagraph);
      
      // Append the new comment to the comment section
      commentSection.appendChild(newComment);
      
      // Clear the textarea after submission
      document.getElementById("comment-text").value = "";
    } else {
      alert("Please write something before submitting.");
    }
  });
  