import React from 'react';

class SearchBar2 extends React.Component {

  state = { numberOfVideo: 0 }

  onNumberChange = (e) => {
    this.setState({ numberOfVideo: e.target.value})
  }

  state = { term: '' };

  onInputChange = (event) => {
    this.setState({ term: event.target.value});
  };

  onFromSubmit = (event) => {
    event.preventDefault();

    this.props.onFormSubmit(this.state.term);
  };

  render(){
    return(
      <div className="search-bar ui segment">
      <form onSubmit={this.onFromSubmit} className="ui form">
        <div className="field">
          <label>Aranacak Kelime</label>
          <input 
            type="text"
            value={this.state.term} 
            onChange={this.onInputChange}
          />
          <label>Video Adedi</label>
          <select className="ui dropdown" onChange={this.onNumberChange}>
            <option value="0">0</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </div>
      </form>
    </div>
    );
  }
}

export default SearchBar2;