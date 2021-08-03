import React, { Component } from 'react'
import { Consumer } from '../../context';
import Spinner from '../main/Spinner';
import Image from '../Searching/Image';

class Images extends Component {
          render() {
                    return (
                              <Consumer>
                                        {value => {
                                                  const { image_list } = value;
                                                  if (value.image_list === undefined || image_list.length === 0) {
                                                            return <Spinner />

                                                  } else {
                                                            return (
                                                                      <>
                                                                                <h3 className="text-center mb-4">Images List</h3>
                                                                                <div className="row">
                                                                                          {image_list.map(img => (
                                                                                                    <Image
                                                                                                              images={image_list}
                                                                                                              title={img.tags}
                                                                                                              key={img.id}
                                                                                                              imgs={img.largeImageURL} />
                                                                                          ))}
                                                                                </div>
                                                                      </>
                                                            )
                                                  }
                                        }}
                              </Consumer>
                    )
          }
}

export default Images
