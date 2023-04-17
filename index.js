import express from "express";

import { engine } from 'express-handlebars';

const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

const students = [
    { name: "ahmed", id: 1 },
    { name: "ebrahem", id: 2 },
    { name: "hassan", id: 3 },
    { name: "yasser", id: 4 },
    { name: "yahya", id: 5 },
    { name: "mahmoud", id: 6 },
    { name: "glal", id: 7 }
];

app.get("/students", (req, res) => {
    let out = "<ul>";
    for (let i = 0; i < students.length; i++) {
        out += "<li><a href='/students/" + students[i].id + "'>" + students[i].id + "-" + students[i].name + "</a></li>";
    }
    out += "</ul>";
    res.send(out);
});
app.get("/students/:id", (req, res) => {
    const student = students.find((item) => {
        return item.id == req.params.id;
    });

    res.send("<h1>" + student.id + "</h1><br><h3>" + student.name + "</h3>");
})


app.listen(4000);