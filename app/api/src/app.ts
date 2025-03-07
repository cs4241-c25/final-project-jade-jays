import express from "express";
import logger from "morgan";
import cors from "cors";

import { ConnectDB } from "./util/DatabaseUtil";
import adminRoutes from "./routes/adminRouter";
import dataRoutes from "./routes/dataRouter";
import authRoutes from "./routes/authRouter";

import passport from "passport";
import LocalStrategy from "passport-local";

export const createServer = ({ DATABASE_URL } : { [key:string]: string }): express.Express => {
  const app = express();

  passport.use(new LocalStrategy(
    function(username, password, done) {
      // Need to create a User model
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));

  ConnectDB(DATABASE_URL);
  app
    .disable("x-powered-by")
    .use(logger("dev"))
    .use(express.json())
    .use(express.urlencoded({ extended: true }))
    .use(cors())
    .use("/api/admin/", adminRoutes)
    .use("/api/data/", dataRoutes)
    .use("/api/auth/", authRoutes);

  app.get('/health-check', (req, res) => {
    res.status(200).send('connected');
  })

  return app;
};