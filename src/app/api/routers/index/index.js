const { Router } = require("express");
const expenseRouter = require("../expenseRoutes/expenseRoutes");
const userRouter = require("../userRoutes/userRoutes");
const router = Router();

router.use("/user", userRouter);
router.use("/expense", expenseRouter);

module.exports = router;
