import { beforeEach, it, expect, describe } from 'vitest';
import { Bank } from './Bank';

let bank = new Bank();
// setup megfelelője
beforeEach(() => {
    bank = new Bank();
})

describe('ujSzamla', () => {
    it('létrehoz egy számlát 0 egyenleggel, ha érvényes adatok vannak megadva', () => {
        bank.ujSzamla("Gipsz Jakab", "1234");
        expect(bank.egyenleg("1234")).toBe(0);
    });

    it('hibát dob, ha a név null', () => {
        expect(() => {
            bank.ujSzamla(null, "4321");
        }).toThrow("null");
    });

    it('hibát dob, ha a név üres', () => {
        expect(() => {
            bank.ujSzamla("", "4321");
        }).toThrow("üres");
    });

    it('hibát dob, ha a számlaszám null', () => {
        expect(() => {
            bank.ujSzamla("Teszt Elek", null);
        }).toThrow("null");
    });

    it('hibát dob, ha a számlaszám üres', () => {
        expect(() => {
            bank.ujSzamla("Teszt Elek", "");
        }).toThrow("üres");
    });

    it('hibát dob, ha a számlaszám megegyezik egy létező számlaszámmal', () => {
        bank.ujSzamla("Gipsz Jakab", "1234");
        expect(() => {
            bank.ujSzamla("Teszt Elek", "1234");
        }).toThrow("már létezik");
    });

    it('nem dob hibát, ha a név megegyezik egy létező névvel', () => {
        bank.ujSzamla("Gipsz Jakab", "1234");
        expect(() => {
            bank.ujSzamla("Gipsz Jakab", "4321");
        }).not.toThrow();
    });
})

describe('egyenleg', () => {
    it('hibát dob, ha a számlaszám null', () => {
        expect(() => {
            bank.egyenleg(null);
        }).toThrow("null");
    });
    it('hibát dob, ha a számlaszám üres', () => {
        expect(() => {
            bank.egyenleg("");
        }).toThrow("üres");
    });
    it('hibát dob, ha a számlaszámmal nem létezik számla', () => {
        bank.ujSzamla("Gipsz Jakab", "1234");
        expect(() => {
            bank.egyenleg("4321");
        }).toThrow("nem létezik");
    });
    it('nem dob hibát, ha a számlaszámmal létezik számla', () => {
        bank.ujSzamla("Gipsz Jakab", "1234");
        expect(() => {
            bank.egyenleg("1234");
        }).not.toThrow();
    });
});

describe('egyenlegFeltolt', () => {
    beforeEach(() => {
        bank.ujSzamla("Gipsz Jakab", "1234");
    })
    it('hibát dob, ha a számlaszám null', () => {
        expect(() => {
            bank.egyenlegFeltolt(null, 10000);
        }).toThrow("null");
    });
    it('hibát dob, ha a számlaszám üres', () => {
        expect(() => {
            bank.egyenlegFeltolt("", 10000);
        }).toThrow("üres");
    });
    it('hibát dob, ha a számlaszámmal nem létezik számla', () => {
        expect(() => {
            bank.egyenlegFeltolt("4321", 10000);
        }).toThrow("nem létezik");
    });
    it('hibát dob, ha az összeg 0', () => {
        expect(() => {
            bank.egyenlegFeltolt("1234", 0);
        }).toThrow("pozitív");
    });
    it('hibát dob, ha az összeg negatív', () => {
        expect(() => {
            bank.egyenlegFeltolt("1234", -1);
        }).toThrow("pozitív");
    });
    it('hibát dob, ha az összeg tört', () => {
        expect(() => {
            bank.egyenlegFeltolt("1234", 30.5);
        }).toThrow("egész");
    });
    it('nem dob hibát, ha az összeg egész szám, de szövegként van megadva', () => {
        expect(() => {
            bank.egyenlegFeltolt("1234", "10000");
        }).not.toThrow();
    });
    it('hibát dob, ha az összeg szöveg', () => {
        expect(() => {
            bank.egyenlegFeltolt("1234", "101ft");
        }).toThrow("szám");
    });
    it('az összeg megváltozik, ha érvényes adatok vannak megadva', () => {
        bank.egyenlegFeltolt("1234", 10000);
        expect(bank.egyenleg("1234")).toBe(10000)
    });
    it('az összeg összeadódik, ha többször ugyan arra a számlára töltünk', () => {
        bank.egyenlegFeltolt("1234", 10000);
        bank.egyenlegFeltolt("1234", 20000);
        bank.egyenlegFeltolt("1234", "25000");
        expect(bank.egyenleg("1234")).toBe(55000)
    });
    it('az összeg a megfelelő számlára töltődik, ha több számla van', () => {
        bank.ujSzamla("Teszt Elek", "9876");
        bank.ujSzamla("Gipsz Jakab", "8765");
        bank.egyenlegFeltolt("1234", 10000);
        bank.egyenlegFeltolt("9876", 20000);
        bank.egyenlegFeltolt("8765", "25000");
        expect(bank.egyenleg("1234")).toBe(10000)
        expect(bank.egyenleg("9876")).toBe(20000)
        expect(bank.egyenleg("8765")).toBe(25000)
    });
});

describe('utal', () => {

});