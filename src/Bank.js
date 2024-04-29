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
        const szamla = this.szamlaKereses(szamlaszam);
        return szamla.egyenleg;
    }

    szamlaKereses(szamlaszam) {
        if (szamlaszam == null) {
            throw new Error("A számlaszám nem lehet null");
        }
        if (szamlaszam == "") {
            throw new Error("A számlaszám nem lehet üres");
        }

        let index = 0;
        while (index < this.#szamlak.length && this.#szamlak[index].szamlaszam != szamlaszam) {
            index++;
        }
        if (index == this.#szamlak.length) {
            throw new Error("A megadott számlaszámmal nem létezik számla");
        }

        return this.#szamlak[index];
    }

    egyenlegFeltolt(szamlaszam, osszeg) {
        const osszegEgesz = parseInt(osszeg);
        if (osszegEgesz != osszeg) {
            throw new Error("Az összeg csak egész szám lehet");
        }
        if (osszegEgesz < 1) {
            throw new Error("Az összeg csak pozitív szám lehet");
        }
        const szamla = this.szamlaKereses(szamlaszam);
        szamla.egyenleg += osszegEgesz;
    }

    utal(honnan, hova, osszeg) {
        throw new Error("Not Implemented");
    }
}