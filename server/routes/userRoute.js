// GENERALS -
const express = require("express");
const passport = require("passport");
const {
  getAdminUsers,
  logout,
  myProfile,
  getAdminStats,
  contactMe,
} = require("../controllers/user");
const { authRole, isAuth } = require("../middlewares/auth");
const router = express.Router();

// SETTING UP GOOGLE AUTHENTICATION & ROUTES -
router.get(
  "/google/auth",
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

router.get(
  "/login",
  passport.authenticate("google", {
    successRedirect: process.env.FRONTEND_URL,
  })
);

router.get("/me", isAuth, myProfile);
router.get("/logout", logout);
router.post("/contactMe", contactMe);

// ADMIN ROUTES -
router.get("/admin/users", isAuth, authRole, getAdminUsers);
router.get("/admin/stats", isAuth, authRole, getAdminStats);

module.exports = router;
