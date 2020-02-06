/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-inferrable-types */
/* eslint-disable no-var */
/* eslint-disable prefer-const */
/* eslint-disable prettier/prettier */
import fs from "fs";
import http from "http";
import url from "url";

interface InputInterface {
    name: string;
    age: number;
    male: boolean;
}
function Hiba(): void {
    console.log("Hiba");
}
export default class Content {
    public content(req: http.IncomingMessage, res: http.ServerResponse): void {
        // favicon.ico kérés kiszolgálása:
        if (req.url === "/favicon.ico") {
            res.writeHead(200, { "Content-Type": "image/x-icon" });
            fs.createReadStream("favicon.ico").pipe(res);
            return;
        }
        // Weboldal inicializálása + head rész:
        res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
        res.write("<!DOCTYPE html>");
        res.write("<html lang='hu'>");
        res.write("<head>");
        res.write("<style>input, pre {font-family:monospace; font-size:1em; font-weight:bold;}</style>");
        res.write("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
        res.write("<title>Jedlik Ts Template</title>");
        res.write("</head>");
        res.write("<body><form><pre>");

        // Kezd a kódolást innen -->

        var szám: number = 123;
        var márka: string = "Trabant";
        var eldöntendő: boolean = false;
        let Márkák: string[] = ["Seat", "VW", "Audi"];
        let Italok: Array<string> = ["Cola", "Fanta", "Sprite"];

        res.write(`${szám} ${márka} ${eldöntendő}`);

        var dolgozó: [number, string, boolean] = [1, "Gipsz Jakab", false];
        res.write(`${dolgozó}`);
        enum Tv {
            Hossz = 130,
            Magasság = 60,
            Ár = 20000
        }

        let teszt: string | number;
        teszt = 1;
        teszt = "Teszt";

        let valami: any = "Jedlik győr";
        valami = 23;
        valami = true;

        let Error: void = Hiba();
        console.log(Error);

        res.write(`${Tv} ${teszt} ${valami}`);
        // <---- Fejezd be a kódolást

        res.write("</pre></form></body></html>");
        res.end();
    }
}
