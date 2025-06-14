import esPasswordValida from './esPasswordValida.js';

describe('Validador de contraseñas', () => {
  it('debería devolver false si la contraseña está vacía', () => {
    expect(esPasswordValida('')).toBe(false);
  });
});
