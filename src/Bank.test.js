import { beforeEach, it, expect, describe } from 'vitest';
import { Bank } from './Bank';

describe('ujSzamla', () => {
    it('létrehoz egy számlát 0 egyenleggel, ha érvényes adatok vannak megadva', () => {
        const bank = new Bank();
        bank.ujSzamla("Gipsz Jakab", "1234");
        expect(bank.egyenleg("1234")).toBe(0);
    });

    it('hibát dob, ha a név null', () => {
        const bank = new Bank();
        expect(() => {
           bank.ujSzamla(null, "4321"); 
        }).toThrow("null");
    });

    it('hibát dob, ha a név üres', () => {
        const bank = new Bank();
        expect(() => {
           bank.ujSzamla("", "4321"); 
        }).toThrow("üres");
    });

    it('hibát dob, ha a számlaszám null', () => {
        const bank = new Bank();
        expect(() => {
           bank.ujSzamla("Teszt Elek", null); 
        }).toThrow("null");
    });

    it('hibát dob, ha a számlaszám üres', () => {
        const bank = new Bank();
        expect(() => {
           bank.ujSzamla("Teszt Elek", ""); 
        }).toThrow("üres");
    });
    
    it('hibát dob, ha a számlaszám megegyezik egy létező számlaszámmal', () => {
        const bank = new Bank();
        bank.ujSzamla("Gipsz Jakab", "1234");
        expect(() => {
            bank.ujSzamla("Teszt Elek", "1234");
        }).toThrow("már létezik");
    });

    it('nem dob hibát, ha a név megegyezik egy létező névvel', () => {
        const bank = new Bank();
        bank.ujSzamla("Gipsz Jakab", "1234");
        expect(() => {
            bank.ujSzamla("Gipsz Jakab", "4321");
        }).not.toThrow();
    });
})