import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://xfyteittgcfzlhgimzho.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeXRlaXR0Z2NmemxoZ2ltemhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MzYzMTcsImV4cCI6MjAxMzMxMjMxN30.G-09XwzxLwy779vLWZaSu8xhZeb-_yhF6WSleFsFg6E';
const supabase = createClient(supabaseUrl, supabaseKey);

var bodyParser = require('body-parser')
const app = require ('express')();
var jsonParser = bodyParser.json()
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })

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

module.exports = app;