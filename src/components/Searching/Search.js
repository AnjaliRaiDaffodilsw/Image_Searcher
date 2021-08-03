import React, { Component } from 'react'
import axios from 'axios';
import { Consumer } from '../../context';

class Search extends Component {
          constructor(props) {
                    super(props)

                    this.state = {
                              imageTitle: ''
                    }
          }
          onChange = (e) => {
                    this.setState({ imageTitle: e.target.value })
          }
          findTrack = (dispatch, e) => {
                    e.preventDefault();

                    axios
                              .get(
                                        `https://pixabay.com/api/?key=${process.env.REACT_APP_MM_KEY}&q=${this.state.imageTitle}
                              &image_type=photo&safesearch=true`
                              )
                              .then(res => {
                                        console.log(res.data);
                                        dispatch({
                                                  type: 'SEARCH_IMAGE',
                                                  payload: res.data.hits
                                        })
                                        this.setState({ imageTitle: '' })
                              })
                              .catch(err => console.log(err));
          };
          render() {
                    return (
                              <Consumer>
                                        {value => {
                                                  const { dispatch } = value
                                                  return (
                                                            <>
                                                                      <h3 className="text-center mb-4">Search Image</h3>

                                                                      <div className="card card-body mb-4 p-4">
                                                                                <form onSubmit={this.findTrack.bind(this, dispatch)}>
                                                                                          <div className="form-group">
                                                                                                    <input
                                                                                                              type="text"
                                                                                                              className="form-control form-control-lg"
                                                                                                              placeholder="Image title..."
                                                                                                              name="imageTitle"
                                                                                                              value={this.state.imageTitle}
                                                                                                              onChange={this.onChange}
                                                                                                    />
                                                                                          </div>
                                                                                          <button className="btn btn-warning btn-lg btn-block mb-5" type="submit">
                                                                                                    Get Image
                                                                                </button>
                                                                                </form>
                                                                      </div>
                                                            </>
                                                  );
                                        }}
                              </Consumer>
                    )
          };
}

export default Search
