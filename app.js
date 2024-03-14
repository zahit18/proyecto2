import express from "express";
import {
    getAllSoli,
    getAllLockers,
    getAllRentas
} from "./database.js";

const app = express();

app.get("/solicitantes", async (req, res) => {
    const solicitantes = await getAllSoli();
    res.status(200).send(solicitantes);
});

app.get("/lockers", async (req, res) => {
    const lockers = await getAllLockers();
    res.status(200).send(lockers);
});

app.get("/renta", async (req, res) => {
    const rentas = await getAllRentas();
    res.status(200).send(rentas);
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});
