const { ProductManager } = require('../homework');

describe('ProductManager', () => {
    let products;

    beforeEach(() => {
        products = new ProductManager();
    });

    describe('Instancia de la clase', () => {
        it('La instancia de la clase deberia tener un arreglo "products" inicialmente vacio', () => {
            expect(products.products).toMatchObject([]);
        });
        it('La instancia deberia tener un id que comienza en 0', () => {
            expect(products.id).toBe(0);
        });
    });

    describe('addProduct', () => {
        let goodProduct = { title: 'Manzanas', description: 'Es una fruta', price: '1000', code: 'MZ12', stock: 200 };
        let goodProduct2 = { title: 'Bananas', description: 'Es una fruta', price: '2500', code: 'BN45', stock: 500 };
        let goodProduct3 = { title: 'Tomates', description: 'Es una fruta', price: '900', code: 'TM254', stock: 100 };

        it('Debe tener un metodo addProduct', () => {
            expect(typeof products.addProduct).toBe('function');
        });

        it('Si el producto no envia un title debera enviar el mensaje "Faltan datos necesarios"', () => {
            expect(
                products.addProduct({
                    description: 'Es una fruta',
                    price: '1000',
                    code: 'MZ12',
                    stock: 200,
                })
            ).toBe('Faltan datos necesarios');
        });

        it('Si el producto no envia una description debera enviar el mensaje "Faltan datos necesarios"', () => {
            expect(
                products.addProduct({
                    title: 'Manzanas',
                    price: '1000',
                    code: 'MZ12',
                    stock: 200,
                })
            ).toBe('Faltan datos necesarios');
        });

        it('Si el producto no envia un price debera enviar el mensaje "Faltan datos necesarios"', () => {
            expect(
                products.addProduct({
                    title: 'Manzanas',
                    description: 'Es una fruta',
                    code: 'MZ12',
                    stock: 200,
                })
            ).toBe('Faltan datos necesarios');
        });

        it('Si el producto no envia un code debera enviar el mensaje "Faltan datos necesarios"', () => {
            expect(
                products.addProduct({
                    title: 'Manzanas',
                    description: 'Es una fruta',
                    price: '1000',
                    stock: 200,
                })
            ).toBe('Faltan datos necesarios');
        });

        it('Si el producto no envia un stock debera enviar el mensaje "Faltan datos necesarios"', () => {
            expect(
                products.addProduct({
                    title: 'Manzanas',
                    description: 'Es una fruta',
                    price: '1000',
                    code: 'MZ12',
                })
            ).toBe('Faltan datos necesarios');
        });

        it('Debera agregar un producto al arreglo de products si posee todas las propiedades con el id como propiedad', () => {
            products.addProduct(goodProduct);
            expect(products.products[0]).toMatchObject({ ...goodProduct, id: 0 });
        });

        it('Se debera aumentar en una unidad el id cada vez que se agregue un nuevo producto', () => {
            expect(products.id).toBe(0);
            products.addProduct(goodProduct);
            expect(products.id).toBe(1);
        });

        it('Se deben poder agregar productos consecutivamente con sus propiedades y aumentando su id cada vez', () => {
            expect(products.products).toMatchObject([]);
            products.addProduct(goodProduct);
            expect(products.products[0]).toMatchObject({ ...goodProduct, id: 0 });
            products.addProduct(goodProduct2);
            expect(products.products[1]).toMatchObject({ ...goodProduct2, id: 1 });
            products.addProduct(goodProduct3);
            expect(products.products[2]).toMatchObject({ ...goodProduct3, id: 2 });
        });

        it('Si se envia un producto con el mismo CODE que un producto ya agregado devolvera el mensaje "El code ${code} ya existe en la base de datos"', () => {
            expect(products.products).toMatchObject([]);
            products.addProduct(goodProduct);
            expect(products.products[0]).toMatchObject({ ...goodProduct, id: 0 });
            expect(products.addProduct(goodProduct)).toBe(`El code ${goodProduct.code} ya existe en la base de datos`);
        });

        it('Debera enviar el mensaje "El producto se agrego correctamente" cuando se agrega un producto', () => {
            expect(products.addProduct(goodProduct)).toBe('El producto se agrego correctamente');
        });
    });

    describe('getProducts', () => {
        let goodProduct = { title: 'Manzanas', description: 'Es una fruta', price: '1000', code: 'MZ12', stock: 200 };
        let goodProduct2 = { title: 'Bananas', description: 'Es una fruta', price: '2500', code: 'BN45', stock: 500 };
        let goodProduct3 = { title: 'Tomates', description: 'Es una fruta', price: '900', code: 'TM254', stock: 100 };

        it('Debe tener un metodo getProducts', () => {
            expect(typeof products.getProducts).toBe('function');
        });

        it('El metodo getProducts debe devolver los productos', () => {
            expect(products.getProducts()).toMatchObject([]);
            products.addProduct(goodProduct);
            products.addProduct(goodProduct2);
            products.addProduct(goodProduct3);
            expect(products.getProducts()[0]).toMatchObject({ ...goodProduct, id: 0 });
            expect(products.getProducts()[1]).toMatchObject({ ...goodProduct2, id: 1 });
            expect(products.getProducts()[2]).toMatchObject({ ...goodProduct3, id: 2 });
        });
    });

    describe('getProductById', () => {
        let goodProduct = { title: 'Manzanas', description: 'Es una fruta', price: '1000', code: 'MZ12', stock: 200 };
        let goodProduct2 = { title: 'Bananas', description: 'Es una fruta', price: '2500', code: 'BN45', stock: 500 };
        let goodProduct3 = { title: 'Tomates', description: 'Es una fruta', price: '900', code: 'TM254', stock: 100 };

        it('Debe tener un metodo getProductById', () => {
            expect(typeof products.getProductById).toBe('function');
        });

        it('El metodo debera devolver el producto con el id enviado', () => {
            products.addProduct(goodProduct);
            products.addProduct(goodProduct2);
            products.addProduct(goodProduct3);

            expect(products.getProductById(2)).toMatchObject({ ...goodProduct3, id: 2 });

            expect(products.getProductById(1)).toMatchObject({ ...goodProduct2, id: 1 });
        });

        it('El metodo devolvera "Not Found" si no encuentra el producto', () => {
            products.addProduct(goodProduct);
            products.addProduct(goodProduct2);
            products.addProduct(goodProduct3);
            expect(products.getProductById(200)).toBe('Not Found');
        });
    });

    describe('editProduct', () => {
        let goodProduct = { title: 'Manzanas', description: 'Es una fruta', price: '1000', code: 'MZ12', stock: 200 };
        let goodProduct2 = { title: 'Bananas', description: 'Es una fruta', price: '2500', code: 'BN45', stock: 500 };
        let goodProduct3 = { title: 'Tomates', description: 'Es una fruta', price: '900', code: 'TM254', stock: 100 };

        beforeEach(() => {
            products.addProduct(goodProduct);
            products.addProduct(goodProduct2);
            products.addProduct(goodProduct3);
        });

        it('Debe tener un metodo editProduct', () => {
            expect(typeof products.editProduct).toBe('function');
        });

        it('Si no existe el producto devolvera "Not Found"', () => {
            expect(products.editProduct(200, {})).toBe('Not Found');
        });

        it('En caso de un code que ya exista y sea diferente al del producto, debera enviar un mensaje de que ya existe ese codigo en la base de datos', () => {
            expect(products.editProduct(1, { code: 'TM254' })).toBe('El code TM254 ya existe en la base de datos');
        });

        it('Debe permitir modificar unicamente le title si se desea', () => {
            products.editProduct(0, { title: 'Alcachofas' });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una fruta',
                price: '1000',
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
        });

        it('Debe permitir modificar solo la description si se desea', () => {
            products.editProduct(0, { title: 'Alcachofas' });

            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una fruta',
                price: '1000',
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
            products.editProduct(0, { description: 'Es una verdura' });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: '1000',
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
        });

        it('Debe permitir modificar solo el precio si se desea', () => {
            products.editProduct(0, { title: 'Alcachofas' });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una fruta',
                price: '1000',
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
            products.editProduct(0, { description: 'Es una verdura' });

            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: '1000',
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
            products.editProduct(0, { price: 500 });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: 500,
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
        });

        it('Debe permitir modificar solo el stock si se desea', () => {
            products.editProduct(0, { title: 'Alcachofas' });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una fruta',
                price: '1000',
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
            products.editProduct(0, { description: 'Es una verdura' });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: '1000',
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
            products.editProduct(0, { price: 500 });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: 500,
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
            products.editProduct(0, { stock: 120 });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: 500,
                code: 'MZ12',
                stock: 120,
                id: 0,
            });
        });

        it('Debe permitir modificar solo el code si se desea', () => {
            products.editProduct(0, { title: 'Alcachofas' });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una fruta',
                price: '1000',
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
            products.editProduct(0, { description: 'Es una verdura' });

            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: '1000',
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
            products.editProduct(0, { price: 500 });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: 500,
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
            products.editProduct(0, { stock: 120 });

            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: 500,
                code: 'MZ12',
                stock: 120,
                id: 0,
            });
            products.editProduct(0, { code: 'ZZ14' });

            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: 500,
                code: 'ZZ14',
                stock: 120,
                id: 0,
            });
        });

        it('No debe permitir modificar el id si se le envia', () => {
            products.editProduct(0, { title: 'Alcachofas' });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una fruta',
                price: '1000',
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
            products.editProduct(0, { description: 'Es una verdura' });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: '1000',
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
            products.editProduct(0, { price: 500 });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: 500,
                code: 'MZ12',
                stock: 200,
                id: 0,
            });
            products.editProduct(0, { stock: 120 });

            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: 500,
                code: 'MZ12',
                stock: 120,
                id: 0,
            });
            products.editProduct(0, { code: 'ZZ14' });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: 500,
                code: 'ZZ14',
                stock: 120,
                id: 0,
            });
            products.editProduct(0, { id: 25 });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: 500,
                code: 'ZZ14',
                stock: 120,
                id: 0,
            });
        });

        it('Debe permitir cambiar los valores de la cantidad de propiedades que deseemos', () => {
            products.editProduct(0, {
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: 500,
                stock: 120,
                code: 'MZ12',
                id: 25,
            });
            expect(products.getProductById(0)).toMatchObject({
                title: 'Alcachofas',
                description: 'Es una verdura',
                price: 500,
                code: 'MZ12',
                stock: 120,
                id: 0,
            });
        });

        it('Debe devolver el mensaje "El producto con id ${id} ha sido modificado con exito', () => {
            expect(
                products.editProduct(0, {
                    title: 'Alcachofas',
                    description: 'Es una verdura',
                    price: 500,
                    stock: 120,
                    code: 'MZ12',
                    id: 25,
                })
            ).toBe(`El producto con id 0 ha sido modificado con exito`);
        });
    });

    describe('deleteProduct', () => {
        let goodProduct = { title: 'Manzanas', description: 'Es una fruta', price: '1000', code: 'MZ12', stock: 200 };
        let goodProduct2 = { title: 'Bananas', description: 'Es una fruta', price: '2500', code: 'BN45', stock: 500 };
        let goodProduct3 = { title: 'Tomates', description: 'Es una fruta', price: '900', code: 'TM254', stock: 100 };

        beforeEach(() => {
            products.addProduct(goodProduct);
            products.addProduct(goodProduct2);
            products.addProduct(goodProduct3);
        });

        it('Debe tener un metodo deleteProduct', () => {
            expect(typeof products.deleteProduct).toBe('function');
        });

        it('Debe devolver le mensaje "Not Found" si no encuentra el id', () => {
            expect(products.deleteProduct(123)).toBe('Not Found');
        });

        it('Debe eliminar un producto indicado por ID', () => {
            expect(products.getProducts()).toMatchObject([
                { ...goodProduct, id: 0 },
                { ...goodProduct2, id: 1 },
                { ...goodProduct3, id: 2 },
            ]);
            products.deleteProduct(1);
            expect(products.getProducts()).toMatchObject([
                { ...goodProduct, id: 0 },
                { ...goodProduct3, id: 2 },
            ]);
        });

        it("Debe devolver el mensaje 'Se borro el elemento con el id ${id}'", () => {
            expect(products.deleteProduct(1)).toBe(`Se borro el elemento con el id 1`);
        });
    });
});
