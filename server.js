const express = require("express");
const app = express();

app.use(express.json());

app.post("/sharpay/webhook", async (req, res) => {
  console.log("Sharpay notification:", req.body);

  // כאן בעתיד תבדוק אם התשלום הצליח
  // ואז תסמן את ההזמנה בשופיפיי כ-Paid

  res.status(200).json({ ok: true });
});

app.get("/", (req, res) => {
  res.send("Sharpay webhook server is running");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
