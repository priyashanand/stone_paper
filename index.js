import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("main.ejs");
});

app.get("/easy", (req,res) =>{
    res.render("easy.ejs")
});

app.get("/hard", (req,res) =>{
    res.render("hard.ejs")
});

app.post("/stone_easy", (req, res) => {
    const comp = items[Math.floor(Math.random() * 3)];
    var res1;
    if(comp === "stone"){
        res1 = "draw";
    }
    else if(comp === "paper"){
        res1 = "you lost";
    }
    else{
        res1 = "you won";
    }
    console.log(res1);
    res.render("easy.ejs",{
        compch: comp,
        res: res1
    });
});

app.post("/paper_easy", (req, res) => {
    const comp = items[Math.floor(Math.random() * 3)];
    var res1;
    if(comp === "paper"){
        res1 = "draw";
    }
    else if(comp === "scissor"){
        res1 = "you lost";
    }
    else{
        res1 = "you won";
    }
    console.log(res1);
    res.render("easy.ejs",{
        compch: comp,
        res: res1
    });
});

app.post("/scissor_easy", (req, res) => {
    const comp = items[Math.floor(Math.random() * 3)];
    var res1;
    if(comp === "scissor"){
        res1 = "draw";
    }
    else if(comp === "stone"){
        res1 = "you lost";
    }
    else{
        res1 = "you won";
    }
    res.render("easy.ejs",{
        compch: comp,
        res: res1
    });
});

app.post("/stone_hard", (req,res)=>{
    const comp = items1[Math.floor(Math.random() * 5)];
    var res1;
    if(comp === "stone"){
        res1 = "draw";
    }
    else if(comp === "paper" || comp === "spock"){
        res1 = "you lost";
    }
    else{
        res1 = "you won";
    }
    console.log(res1);
    res.render("hard.ejs",{
        compch: comp,
        res: res1
    });
});
app.post("/paper_hard", (req,res)=>{
    const comp = items1[Math.floor(Math.random() * 5)];
    var res1;
    if(comp === "paper"){
        res1 = "draw";
    }
    else if(comp === "scissor" || comp === "lizard"){
        res1 = "you lost";
    }
    else{
        res1 = "you won";
    }
    res.render("hard.ejs",{
        compch: comp,
        res: res1
    });
});
app.post("/scissor_hard", (req,res)=>{
    const comp = items1[Math.floor(Math.random() * 5)];
    var res1;
    if(comp === "scissor"){
        res1 = "draw";
    }
    else if(comp === "stone" || comp === "spock"){
        res1 = "you lost";
    }
    else{
        res1 = "you won";
    }
    console.log(res1);
    res.render("hard.ejs",{
        compch: comp,
        res: res1
    });
});
app.post("/lizard", (req,res)=>{
    const comp = items1[Math.floor(Math.random() * 5)];
    var res1;
    if(comp === "lizard"){
        res1 = "draw";
    }
    else if(comp === "stone" || comp === "scissor"){
        res1 = "you lost";
    }
    else{
        res1 = "you won";
    }
    console.log(res1);
    res.render("hard.ejs",{
        compch: comp,
        res: res1
    });
});
app.post("/spock", (req,res)=>{
    const comp = items1[Math.floor(Math.random() * 5)];
    var res1;
    if(comp === "spock"){
        res1 = "draw";
    }
    else if(comp === "paper" || comp === "lizard"){
        res1 = "you lost";
    }
    else{
        res1 = "you won";
    }
    console.log(res1);
    res.render("hard.ejs",{
        compch: comp,
        res: res1
    });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});


const items = ["stone", "paper", "scissor"];
const items1 = ["stone", "paper", "scissor", "lizard", "spock"]