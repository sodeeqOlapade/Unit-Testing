module.exports.getArrayOfUserRepo = function(username) {
  console.log("Reading files from GitHub database");

  const db = [
    {
      username: "geek",
      repos: ["my_web_repo", "my_work_repo", "hands_on_repo"]
    },
    {
      username: "geek1",
      repos: ["react", "jest", "loan_app"]
    },
    {
      username: "geek2",
      repos: ["decathon", "my_school_app", "healthy_repo"]
    }
  ];

  const reqUser = db.filter(user => {
    return user.username === username;
  });

  return reqUser[0].repos;
};
