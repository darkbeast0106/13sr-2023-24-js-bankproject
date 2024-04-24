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