import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="login-wrapper">
        <form className="box login-box">
          <div className="field">
            <label className="label">Input1</label>
            <div className="control">
              <input
                className="input"
                type="text"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Input2</label>
            <div className="control">
              <input
                className="input"
                type="text"
              />
            </div>
          </div>
          <div className="control">
            <button className="button is-fullwidth is-primary">Submit</button>
          </div>
        </form>
      </div>
    );
  }
}

export default App;
