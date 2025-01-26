const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { Users } = require("../models");

// Register admin (opsional, hanya untuk setup awal)
const register = async (req, res) => {
    const { username, email, password, role } = req.body;
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        await Users.create({ username, email, password: hashedPassword, role });
        res.json({ message: "Admin registered successfully!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Login admin
const login = async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await Users.findOne({ where: { username } });
        if (!user || user.role !== "admin") {
            return res.status(401).json({ error: "Invalid credentials!" });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ error: "Invalid credentials!" });
        }

        // Generate token
        const token = jwt.sign(
            { id: user.id, username: user.username, role: user.role },
            "your_secret_key",
            { expiresIn: "1h" }
        );

        res.json({ token, message: "Login successful!" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { register, login };
