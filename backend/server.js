import express from "express";
const app = express();
import cors from 'cors';
import mercadopago from "mercadopago";
app.use(express.json());
app.use(cors());

mercadopago.configure({
  access_token: "TEST-8513368391382688-111122-3402db45405f9ca9699ca9b5e053b0bc-703814894"
});

app.get("/", function (req, res) {
  res.send("el servidor de mercado pago funciona! :)");
});

app.post("/create_preference", (req, res) => {
  let preference = {
    items: [
      {
        title: req.body.description,
        unit_price: Number(req.body.price),
        quantity: Number(req.body.quantity),
      },
    ],
    back_urls: {
      success: "http://localhost:3000/pago",
      failure: "http://localhost:5173/pago",
      pending: "",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
});

app.listen(8082, () => {
  console.log("the server is now running on port 8080");
});
