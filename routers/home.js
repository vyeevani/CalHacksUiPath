// DEPENDENCIES
const router = require("express").Router();
const firebase = require("../utils/firebase.js");

// ROUTES
router.get("/", async(req, res) => {
    res.render("pages/home");
});

// EXPORTS
module.exports = router;
