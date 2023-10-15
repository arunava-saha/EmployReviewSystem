const Company = require("../models/company");

// render homepage
module.exports.renderHomePage = function (req, res) {
  if (req.user) {
    res.redirect("/user/employee");
  }

  res.render("home", { title: "ERS | Home" });
};

// render signin page (form)
module.exports.renderSignInPage = function (req, res) {
  if (req.user) {
    res.redirect("/user/employee");
  }

  res.render("signin", { title: "ERS | Sign_In" });
};

/**
 * render signup page (form)
 * finds all registed companies and sends it to ejs
 */

module.exports.renderSignUpPage = async function (req, res) {
  const company = await Company.find({}).select("-employees");

  if (company.length > 0) {
    res.locals.company = company;
  }

  res.render("signup", { title: "ERS | Sign_Up" });
};

// render create company page (form)
module.exports.renderCreateCompanyPage = function (req, res) {
  res.render("create_company", { title: "ERS | create company" });
};
