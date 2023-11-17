import { createClient } from '@supabase/supabase-js';
import bodyParser from 'body-parser';
import router from '../eliminar/rutas';
var Pusher = require("pusher");


const supabaseUrl = 'https://xfyteittgcfzlhgimzho.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeXRlaXR0Z2NmemxoZ2ltemhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MzYzMTcsImV4cCI6MjAxMzMxMjMxN30.G-09XwzxLwy779vLWZaSu8xhZeb-_yhF6WSleFsFg6E';
const supabase = createClient(supabaseUrl, supabaseKey);
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const pusher = new Pusher({
    appId: "1695357",
    key: "148750fcc34a63550b8f",
    secret: "a2ed3f2f55d0356ca88f",
    cluster: "eu",
    useTLS: true
  });



const app = require ('express')();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));




router.post('/api/agregar/comandas', urlencodedParser, async (req, res) => {
    try {
        
        const idComanda = req.body.idComanda;

        if (idComanda === 0) {
            // Si el idComanda es 0, ejecuta la lógica de comandasSin
            const { data, error } = await supabase
                .from('Comandas')
                .insert([
                    { idPersonal: req.body.idPersonal, anotacion: req.body.anotacion, precio: req.body.precio }
                ])
                .select();

            if (error) {
                res.status(500).json({ error: 'Error al agregar un nuevo apartado en la tabla ApartadosCarta' });
            } else {
                res.json(data);
            }
        } else {
            // Realiza el código correspondiente a /api/agregar/comandas
            const { data, error } = await supabase
                .from('Comandas')
                .insert([
                    { idComanda: idComanda, idPersonal: req.body.idPersonal, anotacion: req.body.anotacion, precio: req.body.precio }
                ])
                .select();

            if (error) {
                res.status(500).json({ error: 'Error al agregar un nuevo apartado en la tabla ApartadosCarta' });
            } else {
                res.json(data);
            }
        }
    } catch (error) {
        console.error('Error en la ruta /api/agregar/comandas:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

router.post('/api/agregar/comandasSin', urlencodedParser, async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('Comandas')
            .insert([
                { idPersonal: req.body.idPersonal, anotacion: req.body.anotacion, precio: req.body.precio }
            ])
            .select();

        if (error) {
            res.status(500).json({ error: 'Error al agregar un nuevo apartado en la tabla ApartadosCarta' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/agregar/apartado:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});



router.post('/api/agregar/mensajes',urlencodedParser, async (req, res) => {
    
    pusher.trigger("canalRecargas", "recargaChat", {
        message: "mensaje"
      });

    try {
        const { data, error } = await supabase
        .from('Mensajes')
        .insert([
          { idEmpleado: req.body.idEmpleado, texto: req.body.texto} 
        ])
        .select()
      

        if (error) {
            res.status(500).json({ error: 'Error al agregar un nuevo apartado en la tabla ApartadosCarta' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/agregar/apartado:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
    
});

router.post('/api/agregar/acceso',urlencodedParser, async (req, res) => {


    try {
        const { data, error } = await supabase
        .from('Acceso')
        .insert([
          { idEmpleado: req.body.idEmpleado, fechaconexion: req.body.fechaconexion} 
        ])
        .select()
      

        if (error) {
            res.status(500).json({ error: 'Error al agregar un nuevo apartado en la tabla ApartadosCarta' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/agregar/apartado:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
    
});

router.post('/api/agregar/empleados',urlencodedParser, async (req, res) => {
    try {
        const { data, error } = await supabase
        .from('Empleados')
        .insert([
          {idPersonal:req.body.idPersonal,nombre: req.body.nombre,tipo:req.body.tipo,dni:req.body.dni,permisoChat:req.body.permisoChat,email:req.body.email,salario:req.body.salario, telefono: req.body.telefono, NumSegSocial: req.body.NumSegSocial, fNacimiento: req.body.fNacimiento }
        ])
        .select()
      

        if (error) {
            res.status(500).json({ error: 'Error al agregar un nuevo apartado en la tabla ApartadosCarta' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/agregar/apartado:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

router.post('/api/agregar/productos',urlencodedParser, async (req, res) => {
    try {
        const { data, error } = await supabase
        .from('Productos')
        .insert([
          { idApartado: req.body.idApartado, nombre: req.body.nombre,descripcion: req.body.descripcion, precio: req.body.precio, cantidad: req.body.cantidad}
        ])
        .select()
      

        if (error) {
            res.status(500).json({ error: 'Error al agregar un nuevo apartado en la tabla ApartadosCarta' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/agregar/apartado:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

router.post('/api/agregar/productosComandas',urlencodedParser, async (req, res) => {
    try {
        const { data, error } = await supabase
        .from('Productos-Comandas')
        .insert([
          { idProductos: req.body.idProducto, idComanda: req.body.idComanda}
        ])
        .select()

        if (error) {
            res.status(500).json({ error: 'Error al agregar un nuevo apartado en la tabla ApartadosCarta' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/agregar/apartado:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});


module.exports = app;