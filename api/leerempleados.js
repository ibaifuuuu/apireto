import { createClient } from '@supabase/supabase-js';
import express from 'express';
import bodyParser from 'body-parser'; 

const supabaseUrl = 'https://xfyteittgcfzlhgimzho.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeXRlaXR0Z2NmemxoZ2ltemhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MzYzMTcsImV4cCI6MjAxMzMxMjMxN30.G-09XwzxLwy779vLWZaSu8xhZeb-_yhF6WSleFsFg6E';
const supabase = createClient(supabaseUrl, supabaseKey);

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/leerempleados', async (req, res) => {
    try {
        const { data, error } = await supabase
            .from('empleados')
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