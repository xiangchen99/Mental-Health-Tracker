import { Hono } from "hono";

const userInfo = new Hono()

userInfo.get("/", (c) => {
  return c.json({
    message: "User info endpoint",
  });
})
.get("/profile", (c) => {
    return c.json({
        message: "User profile endpoint",
    });
    }
)

export default userInfo;