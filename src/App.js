import React, { useState } from 'react';
import { Box, Grommet, Heading, Keyboard } from 'grommet';

function App() {
  const [conso, toggleConso] = useState(false);
  var Mousetrap = require('mousetrap');
  Mousetrap.bind('`', flipConsole);
  function flipConsole() {
    console.log(conso)
    conso ? toggleConso(false) : toggleConso(true)
  }

  return (
    <Grommet plain>
      yeet, 
      {
        conso && " you have unlocked the console!"
      }
    </Grommet>
  );
}

export default App;
