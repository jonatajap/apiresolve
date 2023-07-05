import { db } from "../../database/database.js";

export class UserController {
  async store(req, res) {
    try {
      const { name, email, password, role } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({ message: "Dados faltando!" });
      }

      const userExists = await db("users").where({ email }).first();
      if (userExists) {
        return res.status(400).json({ message: "Usuário já existe" });
      }

      const roleExists = await db("roles")
        .where({ name: role.toUpperCase() })
        .first();
      if (!roleExists) {
        return res.status(400).json({ message: "Cargo não existe" });
      }

      const user = {
        name,
        email,
        password,
        role_id: roleExists.id,
      };

      await db("users").insert(user);
      return res.status(200).json({
        message: "Usuário criado com sucesso!",
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role_id,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro interno do servidor!" });
    }
  }

  async login(req, res) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({ message: "Dados faltando!" });
      }

      const user = await db("users").where({ email }).first();
      if (!user) {
        return res.status(400).json({ message: "Este usuário não existe!" });
      }

      if (user.email !== email || user.password !== password) {
        return res.status(400).json({ message: "Credenciais inválidas!" });
      }

      return res.status(200).json({
        message: "Usuário logado com sucesso!",
        data: {
          id: user.id,
          name: user.name,
          email: user.email,
          role: user.role_id,
        },
      });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: "Erro interno do servidor!" });
    }
  }
}
