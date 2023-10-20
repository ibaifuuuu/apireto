import { createClient } from '@supabase/supabase-js';
import bodyParser from 'body-parser'; 

const supabaseUrl = 'https://xfyteittgcfzlhgimzho.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeXRlaXR0Z2NmemxoZ2ltemhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MzYzMTcsImV4cCI6MjAxMzMxMjMxN30.G-09XwzxLwy779vLWZaSu8xhZeb-_yhF6WSleFsFg6E';
const supabase = createClient(supabaseUrl, supabaseKey);

const app = require('express')();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/leer/todo', async (req, res) => {
    try {
        const { data: apartados, error: errorApartados } = await supabase
        .from('ApartadosCarta')
        .select('*');

        const { data: comandas, error: errorComandas } = await supabase
        .from('Comandas')
        .select('*');


        const { data: empleados, error: errorEmpleado } = await supabase
            .from('Empleados')
            .select('*');

        const { data: mensajes, error: errorMensajes } = await supabase
            .from('Mensajes')
            .select('*');
        
        const { data: productos, error: errorProductos } = await supabase
            .from('Productos')
            .select('*');

        const {data: productoscomandas, error: errorProdCom} = await supabase
            .from('Productos-Comandas')
            .select('*')

        const { data: tareas, error: errorTareas } = await supabase
            .from('Tareas')
            .select('*');


        if (errorTareas || errorProductos || errorEmpleado || errorApartados || errorComandas || errorMensajes) {
            res.status(500).json({ error: 'Error al obtener datos desde Supabase' });
        } else {
            res.json({ tareas, productos, empleados, apartados,comandas,mensajes,productoscomandas });
        }
    } catch (error) {
        console.error('Error en la ruta /api/leer/todo:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

module.exports = app;
