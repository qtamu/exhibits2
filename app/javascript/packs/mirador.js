import Mirador from 'mirador/dist/mirador.min';

const urlParams = new URLSearchParams(window.location.search);
const manifestId = urlParams.get('manifest')

const config = {
  id: 'mirador',
  theme: {
    palette: {
      primary: {
        main: '#500000',
      },
    },
    transitions: {}
  },
  windows: [{
    manifestId
  }],
  catalog: []
};

Mirador.viewer(config);
