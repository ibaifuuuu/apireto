import { createClient } from '@supabase/supabase-js';
import bodyParser from 'body-parser';
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


app.post('/api/agregar/comandas',urlencodedParser, async (req, res) => {

    pusher.trigger("canalRecargas", "recargaChat", {
        message: "mensaje nuevo"
      });

    try {
        const { data, error } = await supabase
        .from('Comandas')
        .insert([
          { idPersonal: req.body.idPersonal, descripcion: req.body.descripcion,fecha_lim : req.body.fecha_lim }
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


app.post('/api/agregar/mensajes',urlencodedParser, async (req, res) => {
    
    pusher.trigger("canalRecargas", "recargaChat", {
        message: "mensaje"
      });

    try {
        const { data, error } = await supabase
        .from('Mensajes')
        .insert([
          { idEmpleado: req.body.idEmpleado, texto: req.body.texto} //la fecha y la hora se suben automaticamente
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

app.post('/api/agregar/empleados',urlencodedParser, async (req, res) => {
    try {
        const { data, error } = await supabase
        .from('Empleados')
        .insert([
          { idPersonal: req.body.idPersonal, nombre: req.body.nombre}
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

app.post('/api/agregar/productos',urlencodedParser, async (req, res) => {
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


app.post('/api/agregar/tareas',urlencodedParser, async (req, res) => {
    try {
        const { data, error } = await supabase
        .from('Tareas')
        .insert([
          { idPersonal: req.body.idPersonal, descripcion: req.body.descripcion,fecha_lim : req.body.fecha_lim }
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