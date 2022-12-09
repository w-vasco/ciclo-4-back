const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/UserModel");

const Register = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      return res.status(401).json({ message: "User is created ..." });
    }
    if (req.body.password) {
      const salt = bcrypt.genSaltSync(10);

      const hashedPassword = bcrypt.hashSync(req.body.password, salt);

      const newUser = new User({
        username: req.body.username,

        password: hashedPassword,
      });

      await newUser.save();

      return res.status(201).json({
        message: "user is registered",
      });
    } else {
      return res.status(403).json({
        message: "please provide password",
      });
    }
  } catch (e) {
    return res.status(500).json({
      message: e.message,
    });
  }
};

async function Login(req, res) {
  try {
    console.log(req.body);
    const user = await User.findOne({ username: req.body.username });
    if (!user) {
      return res.status(404).json("User not found");
    }
    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: " Wrong password" });
    }

    const payload = { id: user._id };
    const token = jwt.sign(payload, process.env.JWT_KEY, {
      algorithm: "HS256",
      expiresIn: "1d",
    });

    return res
      .cookie("access_token", token, {
        httpOnly: true,
        secure: true,
        samesite: "None",
        MaxAge: 60 * 60 * 1000,
      })
      .status(200)
      .json({ message: "token asignado" });
  } catch (e) {
    return res.status(500).json({ message: e.message });
  }
}

const Refresh = (req, res) => {
  const cookies = req.cookies;

  if (!cookies?.jwt) return res.status(401).json({ message: "Unauthorized" });

  const refreshToken = cookies.jwt;

  jwt.verify(
    refreshToken,
    process.env.REFRESH_TOKEN_SECRET,
    async (err, decoded) => {
      if (err) return res.status(403).json({ message: "Forbidden" });

      const foundUser = await User.findOne({
        username: decoded.username,
      }).exec();

      if (!foundUser) return res.status(401).json({ message: "Unauthorized" });

      const accessToken = jwt.sign(
        {
          UserInfo: {
            username: foundUser.username,
          },
        },
        process.env.JWT_KEY,
        { expiresIn: "1d" }
      );

      res.json({ accessToken });
    }
  );
};

const Logout = (req, res) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204); //No content
  res.clearCookie("jwt", { httpOnly: true, sameSite: "None", secure: true });
  res.json({ message: "Cookie cleared" });
};

module.exports = { Register, Login, Refresh, Logout };
