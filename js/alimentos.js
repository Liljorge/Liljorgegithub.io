 document.getElementById('buscador').addEventListener('input', function(event) {
    var busqueda = event.target.value.toLowerCase();
    var filtro = document.getElementById('filtro').value.toLowerCase(); // Obtén el valor del filtro seleccionado
    var productos = document.getElementsByClassName('producto');

    for (var i = 0; i < productos.length; i++) {
      var producto = productos[i];
      var titulo = producto.getElementsByTagName('h4')[0].innerText.toLowerCase();
      var descripcion = producto.getElementsByTagName('p')[0].innerText.toLowerCase();

      // Aplica el filtro según el valor seleccionado
      if ((filtro === 'todos' || filtro === 'cachorros') && (titulo.includes('cachorro') || descripcion.includes('cachorro'))) {
        producto.style.display = 'block';
      } else if ((filtro === 'todos' || filtro === 'adultos') && (titulo.includes('adulto') || descripcion.includes('adulto'))) {
        producto.style.display = 'block';
      } else if ((filtro === 'todos' || filtro === 'gatos') && (titulo.includes('gato') || descripcion.includes('gato'))) {
        producto.style.display = 'block';
      } else {
        producto.style.display = 'none';
      }
    }
  });
