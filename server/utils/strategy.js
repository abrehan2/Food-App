// GENERALS -
const { Strategy: Google_Strategy } =
  require("passport-google-oauth20").Strategy;
const User = require("../models/userModel");
const passport = require("passport");

exports.connectPassport = () => {
  passport.use(
    new Google_Strategy(
      {
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL,
        scope: ["profile", "email"],
      },

      async function (accessToken, refreshToken, profile, done) {
        const user = await User.findOne({
          googleId: { $eq: profile.id },
        });

        // console.log(user)

        if (!user) {
          const newUser = await User.create({
            googleId: profile.id,
            name: profile.displayName,
            photo: profile.photos[0].value,
          });

          return done(null, newUser);
        }

        return done(null, user);
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser(async (me, done) => {
    const user = await User.findOne({
      $or: [{ googleId: me.googleId }, { _id: me._id }],
    });
    done(null, user);
  });
};
