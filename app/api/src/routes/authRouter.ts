import {Request, Response, Router} from "express";
import passport from "passport";


const router: Router = Router();

router.post("/login", passport.authenticate("local", {failureRedirect: "/login"}), (req: Request, res: Response) => {
    res.redirect("/");
});

export default router;