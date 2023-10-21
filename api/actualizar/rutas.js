import { createClient } from '@supabase/supabase-js';
import bodyParser from 'body-parser';

const supabaseUrl = 'https://xfyteittgcfzlhgimzho.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeXRlaXR0Z2NmemxoZ2ltemhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MzYzMTcsImV4cCI6MjAxMzMxMjMxN30.G-09XwzxLwy779vLWZaSu8xhZeb-_yhF6WSleFsFg6E';
const supabase = createClient(supabaseUrl, supabaseKey);

const app = require ('express')();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.put('/api/actualizar/empleados', async (req, res) => {
    const { data, error } = await supabase
    .from('Empleados')
    .update({ tipo: req.body.tipo, nombre: req.body.nombre })
    .eq('idPersonal', req.body.idPersonal)
    .select()
});











module.exports = app