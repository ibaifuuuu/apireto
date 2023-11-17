import { createClient } from '@supabase/supabase-js';
import bodyParser from 'body-parser';
var Pusher = require("pusher");


const supabaseUrl = 'https://xfyteittgcfzlhgimzho.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeXRlaXR0Z2NmemxoZ2ltemhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MzYzMTcsImV4cCI6MjAxMzMxMjMxN30.G-09XwzxLwy779vLWZaSu8xhZeb-_yhF6WSleFsFg6E';
const supabase = createClient(supabaseUrl, supabaseKey);
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

app.get('/api/leer/apartados', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('ApartadosCarta')
            .select('*');

        if (error) {
            res.status(500).json({ error: 'Error al obtener datos desde Supabase' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/lista:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

app.get('/api/leer/comandas', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('Comandas')
            .select('*');

        if (error) {
            res.status(500).json({ error: 'Error al obtener datos desde Supabase' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/lista:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

app.get('/api/leer/productoscomandas', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('Productos-Comandas')
            .select('*');

        if (error) {
            res.status(500).json({ error: 'Error al obtener datos desde Supabase' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/lista:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }    });


    app.get('/api/leer/productos', async (req, res) => {
        try {
            const { data, error } = await supabase
                .from('Productos')
                .select('*');
    
            if (error) {
                res.status(500).json({ error: 'Error al obtener datos desde Supabase' });
            } else {
                res.json(data);
            }
        } catch (error) {
            console.error('Error en la ruta /api/lista:', error);
            res.status(500).json({ error: 'Error en el servidor' });
        }
});

app.get('/api/leer/mensajes', async (req, res) => {

    try {
        const { data, error } = await supabase
            .from('Mensajes')
            .select('*');

        if (error) {
            res.status(500).json({ error: 'Error al obtener datos desde Supabase' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/lista:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

app.get('/api/leer/empleados', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('Empleados')
            .select('*');

        if (error) {
            res.status(500).json({ error: 'Error al obtener datos desde Supabase' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/lista:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

app.get('/api/leer/tareas', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('Tareas')
            .select('*');

        if (error) {
            res.status(500).json({ error: 'Error al obtener datos desde Supabase' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/lista:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

app.get('/api/leer/acceso', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('Acceso')
            .select('*');

        if (error) {
            res.status(500).json({ error: 'Error al obtener datos desde Supabase' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/lista:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

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
            res.json({apartados,productos,productoscomandas,comandas,empleados,mensajes, tareas });
        }
    } catch (error) {
        console.error('Error en la ruta /api/leer/todo:', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});




module.exports = app;