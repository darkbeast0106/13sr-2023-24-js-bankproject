export class Bank {
    #szamlak = [];
    
    ujSzamla(nev, szamlaszam) {
        if (nev == null) {
            throw new Error("A név nem lehet null")
        }
        if (nev == "") {
            throw new Error("A név nem lehet üres")
        }
        if (szamlaszam == null) {
            throw new Error("A számlaszám nem lehet null")
        }
        if (szamlaszam == "") {
            throw new Error("A számlaszám nem lehet üres")
        }

        let index = 0;
        while (index < this.#szamlak.length && this.#szamlak[index].szamlaszam != szamlaszam) {
            index++;
        }

        if (index < this.#szamlak.length) {
            throw new Error("A megadott számlaszámmal már létezik számla")
        }

        const szamla = {
            tulajdonos: nev,
            szamlaszam: szamlaszam,
            egyenleg: 0
        }
        this.#szamlak.push(szamla);
    }

    /**
     * Lekérdezi az adott számlán lévő pénzösszeget
     * @param {string} szamlaszam A számla számlaszáma, aminek az egyenlegét keressük
     * @throws A számlaszám nem lehet null
     * @throws A számlaszám nem lehet üres
     * @throws A számlaszámmal nem létezik számla
     * @returns {number} A számlán lévő egyenleg
     */
    egyenleg(szamlaszam) {
        return 0;
    }

    egyenlegFeltolt(szamlaszam, osszeg) {
        throw new Error("Not Implemented");
    }

    utal(honnan, hova, osszeg) {
        throw new Error("Not Implemented");
    }
}