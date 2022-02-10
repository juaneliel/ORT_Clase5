const devolverIdNuevo = (lista) => {
  const ultimo = lista[lista.length - 1];
  const ultimoId = ultimo.id;
  return ultimoId + 1;
};

export { devolverIdNuevo };
