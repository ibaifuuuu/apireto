const supabaseUrl = 'https://xfyteittgcfzlhgimzho.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhmeXRlaXR0Z2NmemxoZ2ltemhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTc3MzYzMTcsImV4cCI6MjAxMzMxMjMxN30.G-09XwzxLwy779vLWZaSu8xhZeb-_yhF6WSleFsFg6E';
const supabase = createClient(supabaseUrl, supabaseKey);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/agregarempleado', async (req, res) => {
    try {
      const { data, error } = await supabase
        .from('Empleados')
        .upsert([
          {
            nombre: req.body.nombre,
          },
        ]);
  
    } catch (error) {
      console.error('Error en la ruta /api/agregarempleado:', error);
      res.status(500).json({ error: 'Error en el servidor' });
    }
  })


const puerto = process.env.PORT || 3000;
app.listen(puerto, () => {
  console.log(`Servidor Express en ejecución en el puerto ${puerto}`);
});

