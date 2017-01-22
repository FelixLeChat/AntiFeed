import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import Search from 'material-ui/svg-icons/action/search';
import {grey300, blue500} from 'material-ui/styles/colors';
import FlatButton from 'material-ui/FlatButton';
import ourTheme from '../../Services/ourTheme';

const styles = {
  input: {
  backgroundColor: 'transparent',
  border: '0px solid',
  height: '40px',
  width: '100%',
  fontSize: '18px',
  flexGrow: 1
  },
  paper: {
    flexGrow:'1',
    padding: '0 0 0 10px',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'transparent',
    lineHeight: '100%',
    minWidth: '42px',
    height: '42px',
  }
};

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchColor: grey300,
      canSend: false,
      currentValue: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this._updateState = this._updateState.bind(this);
    this._sendSearch = this._sendSearch.bind(this);
  }

  handleChange(event) {
    this._updateState(event.target.value);
  }

  handleKeyPress(e) {
    if (e.key === 'Enter' && this.state.canSend) {
      this._sendSearch();
    }
  }

  _sendSearch(){
    this.props.search(this.state.currentValue);
    this._updateState('');
  }

  _updateState(val) {
    const canSend = !!val;
    this.setState({
      currentValue: val,
      canSend,
      searchColor: canSend ? ourTheme.palette.accent1Color : grey300,
    });
  }

  render() {
    return (
		 <Paper style={styles.paper} zDepth={1}>
      <input style={styles.input} type="text"
        value={this.state.currentValue}
        placeholder="Keyword" 
        onChange={this.handleChange}
        onKeyPress={this.handleKeyPress}/>
      <FlatButton
        backgroundColor="#a4c639"
        disabled={!this.state.canSend}
        hoverColor="#8AA62F"
        onClick={this._sendSearch}
        icon={<Search color={this.state.searchColor} />}
        style={styles.button}
      />
     </Paper>
    );
  }
}

export default SearchBar;