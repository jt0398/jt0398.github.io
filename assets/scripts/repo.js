$(document).ready(function() {
  /*Get list of repos that I've starred. 
    This helps me control which repo I want to feature in my portfolio */
  $.ajax("https://api.github.com/users/jt0398/starred")
    .then(response => {
      for (let repo of response) {
        let repoName = repo.name;

        let projectDiv = ` <div class="col-md-3 p-0 border project" data-aos="flip-right" data-aos-duration="1500" data-aos-delay="50">
            <a href="${repo.homepage ? repo.homepage : "#"}" target="_blank">
                <img src="assets/images/${repoName}.jpg" class="img-fluid" alt="${repoName}"
                    title="${repoName}">
                <h4 class="mb-0 pb-0">${repoName}</h4>                
            </a>            
            <div class="ml-3 mr-4">${repo.description}</div>
            <ul class="stack" id="stack-${repoName}">                
                <li class="mt-2"><a href="${repo.html_url}" target="_blank"><i
                            class="fab fa-github-square"></i></a></li>
            </ul>
        </div>`;

        $("#repoList").append(projectDiv);

        //I added the tech stack used in the repo's topic
        let APIUrl = `https://api.github.com/repos/jt0398/${repoName}/topics`;

        $.ajax({
          url: APIUrl,
          headers: { Accept: "application/vnd.github.mercy-preview+json" }
        })
          .then(function(response2) {
            let stackHTML = "";

            for (let stack of response2.names) {
              stackHTML += `<li>${stack}</i>`;
            }

            $("#stack-" + repoName + ":last-child").prepend(stackHTML);
          })
          .fail(function(jqXHR, textStatus, errorThrown) {
            console.log(textStatus, errorThrown);
          });
      }
    })
    .fail(function(jqXHR, textStatus, errorThrown) {
      console.log(textStatus, errorThrown);
    });
});
