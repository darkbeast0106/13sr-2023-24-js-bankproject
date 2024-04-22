export class Bank {
    ujSzamla(nev, szamlaszam) {
        throw new Error("Not Implemented");
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
        throw new Error("Not Implemented");
    }

    egyenlegFeltolt(szamlaszam, osszeg) {
        throw new Error("Not Implemented");
    }

    utal(honnan, hova, osszeg) {
        throw new Error("Not Implemented");
    }
}