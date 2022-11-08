const express = require("express");

const router = express.Router();

/**
 * Called on react app load. Creates user when user loads app for
 * the first time.
 *
 * TODO: refresh shopifyAccessToken.
 */
router.get("/me", async (req, res) => {
  try {
  } catch (error) {}
});

module.exports = router;
