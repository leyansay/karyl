// Create a new post and prepend to post list (simplified, no reaction stuff)
function createPost() {
  const textArea = document.querySelector(".create-post textarea");
  const content = textArea.value.trim();
  if (content === "") return;

  const postList = document.getElementById("post-list");

  const post = document.createElement("div");
  post.className = "post";

  const postHeader = document.createElement("div");
  postHeader.className = "post-header";
  postHeader.innerHTML = `<strong><i class="fas fa-user-circle"></i> You</strong> • <span>Just now</span>`;

  const postContent = document.createElement("div");
  postContent.className = "post-content";
  postContent.textContent = content;  // safe text

  const postActions = document.createElement("div");
  postActions.className = "post-actions";
  postActions.innerHTML = `
    <button class="like-btn"><i class="far fa-thumbs-up"></i> Like</button>
    <button><i class="far fa-comment"></i> Comment</button>
    <button><i class="far fa-share-square"></i> Share</button>
  `;

  post.appendChild(postHeader);
  post.appendChild(postContent);
  post.appendChild(postActions);

  postList.prepend(post);
  textArea.value = "";
}

// Remove binding for reaction events on page load
// Just leave it empty or remove this block if not needed
document.addEventListener('DOMContentLoaded', () => {
  // No reaction events to bind anymore
});
