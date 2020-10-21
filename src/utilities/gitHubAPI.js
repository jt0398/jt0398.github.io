import axios from "axios";

export default {
  getRepos: () => {
    return new Promise((resolve, reject) => {
      let repos = [];

      axios
        .get("https://api.github.com/users/jt0398/starred")
        .then((response) => {
          repos = response.data;
          const gitPromises = [];

          for (let i = 0; i < repos.length; i++) {
            const repo = repos[i];
            const repoName = repo.name;

            gitPromises.push(
              axios.get(
                `https://api.github.com/repos/jt0398/${repoName}/topics`,
                {
                  headers: {
                    Accept: "application/vnd.github.mercy-preview+json",
                  },
                }
              )
            );
          }

          Promise.all(gitPromises)
            .then((response2) => {
              const topics = response2;

              for (let i = 0; i < topics.length; i++) {
                let repoTopics = topics[i].data.names;

                repoTopics = repoTopics.map((topic, i) => {
                  return { name: topic, id: i + 1 };
                });

                repos[i].topics = repoTopics;
              }

              resolve(repos);
            })
            .catch((err) => {
              throw err;
            });
        })
        .catch((err) => {
          console.log(err);
        });
    });
  },
};
