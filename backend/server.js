'use strict'

import { readFile } from "fs"

import express from "express";
import cors from "cors"

import { getStdCodeByCountryCode } from "./util.js"

const app = express();

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    readFile("./data/database.json", (err, data) => {
        let output;  // array of objects
        if (err) {
            output = [];
        } else {
            output = [JSON.parse(data)][0]
        }
        // for each of the users we want to send limited parameters 

        let sendUserData = [];
        for (let i = 0; i < output.length; i++) {
            const user = output[i];
            let userInfo = {
                id: user.login.uuid,
                name: user.name,
                email: user.email,
                phone: user.phone,
                picture: user.picture.medium,
                std: getStdCodeByCountryCode(user.nat)
            }

            sendUserData.push(userInfo)
        }

        res.json({
            response: sendUserData
        })
    })
})

// we fake userdata from server and also fake a network lag from the so called database
app.listen(800 || process.env.PORT, () => console.clear())
