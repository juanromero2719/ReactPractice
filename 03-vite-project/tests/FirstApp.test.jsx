import { render } from '@testing-library/react';
import { FirstApp } from '../src/FirstApp';

describe('Pruebas en <FirstApp>', () => {
    
    test('Debe de hacer match con el snapshot', () => {

      const title = "Hola, soy Goku";
      render( <FirstApp title={title} /> )

    });
});