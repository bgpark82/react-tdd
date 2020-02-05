import React, {useState} from 'react';
import Counter from './Counter'
import Info from './Info';
import ContextSample from './ContextSample';
import Average from './Average';
import RefSample from './RefSample';
import UsePromiseSample from './UsePromiseSample';

function App() {
  const [visible, setVisible] = useState(false);
  return (
    <div>
      <button
        onClick={() => {
          setVisible(!visible);
        }}
      >
        {visible ? '숨기기' : '보이기'}
      </button>
      <hr />
      {visible && <Info />}
      <ContextSample/>
      <Average/>
      <RefSample/>
      <UsePromiseSample/>
    </div>
  );
}

export default App;
