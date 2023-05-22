//Crearemos una clase ProductManager por lo que seguiremos los siguientes pasos.

//La instancia de la clase no enviara ningun parametro pero cada instancia de la misma contara con un arreglo de productos (products) inicialmente vacio, y un id que comienza en 0 y se utilizara para darle un valor a cada producto asi identificarlo.

//Cada producto contara con "title", "description", "price", "code", "stock" y un "id" que se lo asignara la clase.
//Crearemos un metodo addProduct, el cual recibira un objeto con la estructura {title, description, price, code, stock}, si falta alguno de estos componentes debera devolver un error "Faltan datos necesarios" en el caso de que el "CODE" se repita dentro de los productos almacenados debe enviarse el mensaje "El code ${code} ya existe en la base de datos", si pasa todos los checks se debe agregar el producto a la base de datos, tener en cuenta que en todos los productos debemos agregar el "id" que sera un incremental que comienza en 0 y se va agregando 1 por cada elemento nuevo, luego se enviara el mensaje "El producto se agrego correctamente"

//Crearemos un metodo getProducts, este sera un metodo que devolver todos los productos que tenemos dentro de los products.

//Crearemos un metodo getProductById que recibira un "id" y devolvera el producto que tenga el id enviado, en el caso de que se envie un id que no exista devolvera el mensaje "Not Found"

//Crear el metodo editProduct, este recibira un id y un objeto con la nueva estructura del producto, en el caso de que no exista el producto se enviara el mensaje "Not found", en el caso de si existir es importante saber que podemos enviar una o todas las propiedades por lo que no siempre modificaremos todos los elementos, como ayuda se deja el operador "??" este operador funciona igual que un operador ternario pero nos ahorra un valor, si escribimos a ?? b si "a" es algun valor que resuelva a true enviara a, si resuelve a false enviara b, es decir:
// "Banana" ?? "Casa" = "Banana"
// false ?? "Casa" = "Casa"
// undefined ?? "Casa" = "Casa"
// Esto podemos utilizarlo para ver si algun dato no existe en la peticion utilizar los datos que ya existen en el producto.
//Tener en cuenta que el code no se debe repetir en el caso de que se cambie por lo que es necesario verificarlo y devolver el mensaje  "El code ${code} ya existe en la base de datos, recordar tambien que si se envia el mismo code del producto no debe verificarlo ya que en este caso siempre daria error por que ya existe en la DB"
//Debe retornar "El producto con el id ${id} ha sido modificado con exito"

//Crearemos un metodo deleteProduct el cual recibira un "id" y devolvera el mensaje "Se borro el elemento con el id ${id}", en el caso de que se envie un id que no exista devolvera el mensaje "Not Found"

class ProductManager {}

//NO CAMBIAR NADA DE ACA EN ADELANTE
module.exports = { ProductManager };
