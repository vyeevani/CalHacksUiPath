// DEPENDENCIES
const router = require("express").Router();
const subRouters = [
    "./home.js"
];

// HELPERS
let handleErrorCode = (code, msg) => {
    return (req, res, next) => {
        res.status(code);
        res.type('txt').send(msg);
    }
}

// ROUTERS
subRouters.forEach(subRouter => {
    router.use(require(subRouter));
})

router.use(handleErrorCode(404, "NOT FOUND"));
router.use(handleErrorCode(500, "SOMETHING WENT WRONG"));


// EXPORTS
module.exports = router;
