module.exports = function(app, path) {
  // send default page to all routes that are undefined
  app.get("/*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public"));
  });

  //portfolio route loads index.html
  app.get("/portfolio", function(req, res) {
    res.sendfile(path.join(__dirname, "../public/index.html"));
  });
};
