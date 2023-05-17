const {
    a,
    b,
    c,
    d,
    e,
    date,
    error,
    nombre,
    frase,
    numero1,
    numero2,
    sum,
    mult,
    div,
    op,
    bucleFor,
    condicionalIf,
    bucleWhile,
    calculadora,
} = require('../homework');

describe('Tipos de datos', () => {
    it('La variable "a" debe ser un string', () => {
        expect(typeof a).toBe('string');
    });

    it('La variable "b" debe ser un numero', () => {
        expect(typeof b).toBe('number');
    });

    it('La variable "c" debe ser un booleano', () => {
        expect(typeof c).toBe('boolean');
    });

    it('La variable "d" debe ser null', () => {
        expect(d).toBe(null);
    });

    it('La variable "e" debe ser undefined', () => {
        expect(e).toBe(undefined);
    });

    it('La variable "date" debe ser una fecha', () => {
        expect(date instanceof Date).toBeTruthy();
    });

    it('La variable "error" debe ser un error', () => {
        expect(error instanceof Error).toBeTruthy();
    });
});

describe('Operaciones', () => {
    describe('Operaciones con String', () => {
        it('El nombre debe ser un string', () => {
            expect(typeof nombre).toBe('string');
        });

        it('La frase debe ser del tipo "Hola Mario como estas? Mi nombre es Giuliano" siendo Mario el nombre indicado por el alumno', () => {
            expect(frase).toBe(`Hola ${nombre} como estas? Mi nombre es Giuliano`);
        });
    });

    describe('Operaciones numericas', () => {
        it('Sum debe devolver la suma entre numero1 y numero2', () => {
            expect(sum).toBe(12);
        });

        it('Mult debe ser la suma entre numero1 y numero2', () => {
            expect(mult).toBe(20);
        });

        it('Div debe ser la division entre numero1 y numero2', () => {
            expect(div).toBe(5);
        });

        it('op debe ser la multiplicacion entre numero1 y numero2 dividida la resta entre numero 1 y numero2, y a ese resultado sumarle 4 veces el numero1', () => {
            expect(op).toBe(42.5);
        });
    });
});

describe('Condicionales', () => {
    describe('Condicional if', () => {
        it('Si "a" es mayor o igual a 20 debe mostrar el mensaje "A es mayor o igual a 20"', () => {
            expect(condicionalIf(20, 0, 0)).toBe('A es mayor o igual a 20');
            expect(condicionalIf(21, 0, 0)).toBe('A es mayor o igual a 20');
        });

        it('Si "a" es menor a 20 debe y "b" es mayor o igual a 15 mostrar el mensaje "A es menor a 20 y b es mayor o igual a 15"', () => {
            expect(condicionalIf(18, 15, 0)).toBe('A es menor a 20 y b es mayor o igual a 15');
            expect(condicionalIf(18, 16, 0)).toBe('A es menor a 20 y b es mayor o igual a 15');
        });

        it('Si "c" es negativo mostar el mensaje "No se puede continuar C es negativo"', () => {
            expect(condicionalIf(0, 0, -1)).toBe('No se puede continuar C es negativo');
            expect(condicionalIf(18, 15, -4)).toBe('No se puede continuar C es negativo');
        });

        it('En cualquier otro caso devolver "Otra cosa"', () => {
            expect(condicionalIf(18, 14, 5)).toBe('Otra cosa');
        });
    });

    describe('Calculadora', () => {
        it('Debe poder sumar 2 valores', () => {
            expect(calculadora(2, 3, 'SUMAR')).toBe(5);
            expect(calculadora(4, 5, 'SUMAR')).toBe(9);
            expect(calculadora(123, 321, 'SUMAR')).toBe(444);
        });

        it('Debe poder restar 2 valores', () => {
            expect(calculadora(5, 3, 'RESTAR')).toBe(2);
            expect(calculadora(10, 5, 'RESTAR')).toBe(5);
            expect(calculadora(500, 200, 'RESTAR')).toBe(300);
        });

        it('Debe poder dividir 2 valores', () => {
            expect(calculadora(50, 2, 'DIVIDIR')).toBe(25);
            expect(calculadora(30, 3, 'DIVIDIR')).toBe(10);
            expect(calculadora(500, 200, 'DIVIDIR')).toBe(2.5);
        });

        it('Debe poder multiplicar 2 valores', () => {
            expect(calculadora(5, 3, 'MULTIPLICAR')).toBe(15);
            expect(calculadora(10, 5, 'MULTIPLICAR')).toBe(50);
            expect(calculadora(500, 200, 'MULTIPLICAR')).toBe(100000);
        });

        it('Debe devolver "Error" en cualquier otro caso', () => {
            expect(calculadora(5, 3, 'Banana')).toBe('Error');
            expect(calculadora(10, 5, 123)).toBe('Error');
            expect(calculadora(500, 200, undefined)).toBe('Error');
        });
    });
});

describe('Bucles', () => {
    describe('Bucle For', () => {
        it('Esta funcion debe multiplicar el valor inicial "a" por 4 y luego su resultado por 4 repetitivamente "b" veces', () => {
            expect(bucleFor(4, 3)).toBe(256);
        });
    });
    describe('Bucles While', () => {
        it('Si "a" es menor a "b" se deberia mostrar el mensaje "b debe ser menor a a"', () => {
            expect(bucleWhile(2, 3)).toBe('b debe ser menor a a');
        });

        it('Si a=9 y b=4 debe devolver 40 cumpliendo con las condiciones explicadas en el ejercicio', () => {
            expect(bucleWhile(9, 4)).toBe(40);
        });

        it('Si a=10 y b=7 debe devolver 55 cumpliendo con las condiciones explicadas en el ejercicio', () => {
            expect(bucleWhile(10, 7)).toBe(55);
        });

        it('Debe funcionar con cualquier combinacion de numeros', () => {
            expect(bucleWhile(3, 2)).toBe(7);
        });
    });
});
