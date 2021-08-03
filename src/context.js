import axios from 'axios';
import React, { Component } from 'react'

const Context = React.createContext();

const reducer = (state, action) => {
          switch (action.type) {
                    case 'SEARCH_IMAGE':
                              return {
                                        ...state,
                                        image_list: action.payload
                              }
                    default: return state
          }
}
export class Provider extends Component {
          constructor(props) {
                    super(props)

                    this.state = {
                              image_list: [],
                              dispatch: action => this.setState(state => reducer(state, action))
                    }
          }
          componentDidMount() {
                    axios
                              .get(
                                        `https://pixabay.com/api/?key=${process.env.REACT_APP_MM_KEY}
                                        &image_type=photo&safesearch=true`
                              )
                              .then(res => {
                                        this.setState({ image_list: res.data.hits });
                              })
                              .catch(err => console.log(err));
          }
          render() {
                    return (
                              <Context.Provider value={this.state}>
                                        {this.props.children}
                              </Context.Provider>
                    )
          }
}

export const Consumer = Context.Consumer;
