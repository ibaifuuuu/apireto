const express = require('express');
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = 'https://xfyteittgcfzlhgimzho.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeXRlaXR0Z2NmemxoZ2ltemhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MzYzMTcsImV4cCI6MjAxMzMxMjMxN30.G-09XwzxLwy779vLWZaSu8xhZeb-_yhF6WSleFsFg6E';
const supabase = createClient(supabaseUrl, supabaseKey);

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

// Ruta para eliminar empleados con datos proporcionados en el cuerpo del JSON
router.put('/api/actualizar/empleados', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('Empleados')
            .update({
                idPersonal: req.body.idPersonal,
                nombre: req.body.nombre,
                tipo: req.body.tipo,
                dni: req.body.dni,
                permisoChat: req.body.permisoChat,
                email: req.body.email,
                salario: req.body.salario,
                telefono: req.body.telefono,
                NumSegSocial: req.body.NumSegSocial,
                fNacimiento: req.body.fNacimiento
            })
            .eq('idPersonal', req.body.idPersonal);

        if (error) {
            console.error('Error updating employee:', error);
            res.status(500).json({
                error: 'Error al actualizar el empleado en la tabla Empleados',
            });
        } else {
            console.log('Employee updated successfully:', data);
            res.json(data);
        }
    } catch (error) {
        console.error('Error en la ruta /api/actualizar/empleados', error);
        res.status(500).json({ error: 'Error en el servidor' });
    }
});


// Otros endpoints de tu aplicación...

module.exports = router;
