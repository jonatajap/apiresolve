import { db } from "../../database/database.js";

export class UserController {
  async store(req, res) {
    const { name, email, password, role } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ message: "Missing data" });
    }

    const userExists = await db("users").where({ email }).first();
    if (userExists) {
      return res.status(400).json({ message: "User already exists" });
    }

    const roleExists = await db("roles")
      .where({ name: role.toUpperCase() })
      .first();
    if (!roleExists) {
      return res.status(400).json({ message: "Role does not exists" });
    }

    const user = {
      name,
      email,
      password,
      role_id: roleExists.id,
    };

    await db("users").insert(user);
    return res.status(200).json({ message: "User created successfully" });
  }
}
