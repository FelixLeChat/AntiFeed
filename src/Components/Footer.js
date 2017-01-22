import React, { Component } from 'react';

const styles = {
  p: {
    color: 'white'
  },
  footer: {
    paddingTop: '40px'
  }
};

class Footer extends Component {
  render() {
    return (
      <div className="footer" style={styles.footer}>
        <div className="row center-xs">
          <div className="col-xs-4">
          </div>
          <div className="col-xs-4">
            <p style={styles.p}>&copy; 2017 - 99% Precision Team</p>
          </div>
          <div className="col-xs-4">
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;