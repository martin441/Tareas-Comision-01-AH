const { obj, agregarPropiedad, Producto, Coche } = require('../homework.js');

describe('Objetos', () => {
    describe('Declaracion de objetos', () => {
        it('Debe tener nombre, apellido, edad y direccion', () => {
            expect(obj).toStrictEqual({ nombre: 'Juan', apellido: 'Rostolfo', edad: 18, direccion: 'La Prida 123' });
        });
    });
    describe('Agregar propiedades', () => {
        it('Se debe poder agregar propiedades utilizano la funcion agregarPropiedad', () => {
            const objeto = {};
            expect(agregarPropiedad(objeto, 'direccion', 'Mi casa 300')).toStrictEqual({ direccion: 'Mi casa 300' });
        });
    });
    describe('Crear objetos con constructor', () => {
        it('El constructor debe poderse utilizar para crear un producto con precio, stock, descripcion y precio', () => {
            const producto1 = new Producto('Salchicha', 24, 'Embutido', 23.4);
            expect(producto1).toMatchObject({ nombre: 'Salchicha', stock: 24, descripcion: 'Embutido', precio: 23.4 });
        });
        it('Se debera crear un metodo que devuelva una descripcion del producto', () => {
            const producto1 = new Producto('Salchicha', 24, 'Embutido', 23.4);
            expect(producto1.getProduct()).toBe(
                `El producto llamado Salchicha tiene un stock de 24 su descripcion es Embutido y tiene un precio unitario de $23.4`
            );
        });
    });
});

describe('Clases', () => {
    let peugeot307;

    beforeEach(() => {
        peugeot307 = new Coche('307', 'Peugeot', '2.0T', '5', 1500000, '2010');
    });

    it('Se debe crear una clase que las propiedades necesarias', () => {
        expect(peugeot307).toMatchObject({
            nombre: '307',
            marca: 'Peugeot',
            cilindrada: '2.0T',
            cantidadPuertas: '5',
            precio: 1500000,
            año: '2010',
        });
    });

    it('Debera tener un metodo getCar', () => {
        expect(typeof peugeot307.getCar).toBe('function');
    });
    it('El metodo getCar debe devolver la instancia', () => {
        expect(peugeot307.getCar()).toMatchObject({
            nombre: '307',
            marca: 'Peugeot',
            cilindrada: '2.0T',
            cantidadPuertas: '5',
            precio: 1500000,
            año: '2010',
        });
    });
    it('Debe tener un metodo getter para el nombre', () => {
        const descriptor = Object.getOwnPropertyDescriptor(Coche.prototype, 'getName');
        expect(descriptor).toBeDefined();
        expect(descriptor.get).toBeInstanceOf(Function);
    });
    it('Debe tener un metodo getter para la marca', () => {
        const descriptor = Object.getOwnPropertyDescriptor(Coche.prototype, 'getBrand');
        expect(descriptor).toBeDefined();
        expect(descriptor.get).toBeInstanceOf(Function);
    });
    it('Debe tener un metodo getter para la cilindrada', () => {
        const descriptor = Object.getOwnPropertyDescriptor(Coche.prototype, 'getDisplacement');
        expect(descriptor).toBeDefined();
        expect(descriptor.get).toBeInstanceOf(Function);
    });
    it('Debe tener un metodo getter para la cantidad de puertas', () => {
        const descriptor = Object.getOwnPropertyDescriptor(Coche.prototype, 'getDoors');
        expect(descriptor).toBeDefined();
        expect(descriptor.get).toBeInstanceOf(Function);
    });
    it('Debe tener un metodo getter para el precio', () => {
        const descriptor = Object.getOwnPropertyDescriptor(Coche.prototype, 'getPrice');
        expect(descriptor).toBeDefined();
        expect(descriptor.get).toBeInstanceOf(Function);
    });
    it('Debe tener un metodo getter para el año', () => {
        const descriptor = Object.getOwnPropertyDescriptor(Coche.prototype, 'getYear');
        expect(descriptor).toBeDefined();
        expect(descriptor.get).toBeInstanceOf(Function);
    });

    it('El metodo getter del nombre debera devolver el nombre', () => {
        expect(peugeot307.getName).toBe('307');
    });
    it('El metodo getter de la marca debera devolver la marca', () => {
        expect(peugeot307.getBrand).toBe('Peugeot');
    });
    it('El metodo getter de la cilindrada debera devolver la cilindrada', () => {
        expect(peugeot307.getDisplacement).toBe('2.0T');
    });
    it('El metodo getter de la cantidad de puertas debera devolver la cantidad de puertas', () => {
        expect(peugeot307.getDoors).toBe('5');
    });
    it('El metodo getter del precio debera devolver el precio', () => {
        expect(peugeot307.getPrice).toBe(1500000);
    });
    it('El metodo getter del año debera devolver el año', () => {
        expect(peugeot307.getYear).toBe('2010');
    });

    it('Debe tener un metodo editPrice', () => {
        expect(typeof peugeot307.editPrice).toBe('function');
    });
    it('El metodo editPrice debe permitir cambiar el precio del vehiculo', () => {
        peugeot307.editPrice(1800000);
        expect(peugeot307.getPrice).toBe(1800000);
    });
});
