import path from "path";
import express from "express";
const router = express.Router();
router.use(express.static(path.resolve(__dirname, "/build")));
router.get(/.*/, (req, res) => {
  res.sendFile(path.resolve(__dirname, "/build/index.html"));
});
//# sourceMappingURL=pageRouter.js.map
