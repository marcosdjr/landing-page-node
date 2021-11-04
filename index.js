const express = require("express");
const app = express();
const port = 3000;
const path = require("path");

let message = "";

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded());

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    const devList = ["Backend", "Frontend", "Fullstack"];
    const analyticsList = ["Engenharia de dados", "Ciência de dados"];
    
    setTimeout(() => {
        message = "";
      }, 1000);
    
    res.render("index", {
      titulo: "Blue",
      devList: devList,
      analyticsList: analyticsList,
      message,
    });
  });

app.get("/teste", function (req, res) {
    res.send("Testando");
  });

  app.get("/index", (req, res) => {
    const devList = ["Backend", "Frontend", "Fullstack"];
    const analyticsList = ["Engenharia de dados", "Ciência de dados"];
    res.render("index", { titulo: "Blue", devList: devList, analyticsList: analyticsList});
  });

// Adicionando a const port e uma arow function de callback para mostrar no console que o servidor está rodando.
app.listen(port, () => console.log(`Servidor rodando em http://localhost:${port}`));

//app.listen(3000);


app.post("/subscription", (req, res) => {
    const { nome, email } = req.body;
    message = `Parabéns ${nome}, sua inscrição foi realizada com sucesso! Um e-mail foi enviado para: ${email}`;
    res.redirect("/");
  });