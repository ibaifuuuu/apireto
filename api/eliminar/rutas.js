const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xfyteittgcfzlhgimzho.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeXRlaXR0Z2NmemxoZ2ltemhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MzYzMTcsImV4cCI6MjAxMzMxMjMxN30.G-09XwzxLwy779vLWZaSu8xhZeb-_yhF6WSleFsFg6E';
const supabase = createClient(supabaseUrl, supabaseKey);

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Ruta para eliminar empleados con datos proporcionados en el cuerpo del JSON
router.post('/api/eliminar/empleados', async (req, res) => {
    try {
        // Eliminar las relaciones foráneas en otras tablas
        const { data: dataRelaciones, error: errorRelaciones } = await supabase
            .from('Comandas')
            .delete()
            .eq('idPersonal', idPersonal);
        if (errorRelaciones) {
            res.status(500).json({ error: 'Error al eliminar las relaciones foráneas en OtraTabla' });
            return;
        }
        
        const idPersonal= req.body.idPersonal;
        const { data, error } = await supabase
            .from('Empleados')
            .delete()
            .eq('idPersonal', idPersonal);
        if (error) {
            res.status(500).json({ error: 'Error al eliminar el empleado de la tabla Empleados' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/eliminar/empleados', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});


router.post('/api/eliminar/productos', async (req, res) => {
    const idProductos = req.body.idProductos;
    try {
        const { data, error } = await supabase
            .from('Productos')
            .delete()
            .eq('idProductos', idProductos)
            ;
        if (error) {
            res.status(500).json({ error: 'Error al eliminar el producto de la tabla Productos' + error });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/eliminar/empleados', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});

// Ruta para eliminar empleados con datos proporcionados en el cuerpo del JSON
router.post('/api/eliminar/comandas', async (req, res) => {
    try {
        // Eliminar las relaciones foráneas en otras tablas
        const { data: dataRelaciones, error: errorRelaciones } = await supabase
            .from('Comandas')
            .delete()
            .eq('idComanda', idComanda);
        if (errorRelaciones) {
            res.status(500).json({ error: 'Error al eliminar las relaciones foráneas en OtraTabla' });
            return;
        }
        
        const idPersonal= req.body.idPersonal;
        const { data, error } = await supabase
            .from('Empleados')
            .delete()
            .eq('idPersonal', idPersonal);
        if (error) {
            res.status(500).json({ error: 'Error al eliminar el empleado de la tabla Empleados' });
        } else {
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/eliminar/empleados', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});


module.exports = router;
