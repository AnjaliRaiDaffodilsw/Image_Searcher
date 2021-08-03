import React, { useState } from 'react'
import { GridList, GridTile } from 'material-ui/GridList';
import IconButton from 'material-ui/IconButton';
import ZoomIn from 'material-ui/svg-icons/action/zoom-in';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

const Image = (props) => {
          const { title, imgs, images } = props;
          const [isOpen, setIsOpen] = useState(false);
          const [currentImage, setcurrentImage] = useState('');

          const handleOpenButton = (img) => {
                    setIsOpen(true);
                    setcurrentImage(img);
          }
          const handleCloseButton = () => {
                    setIsOpen(false);
          }
          let imagesList;

          if (images) {
                    imagesList = (
                              <GridList cols={4}>
                                        {  images.map(img => (
                                                  <GridTile
                                                            title={title}
                                                            key={img.id}
                                                            actionIcon={
                                                                      <IconButton onClick={() => handleOpenButton(img.largeImageURL)}>
                                                                                <ZoomIn color="white" />
                                                                      </IconButton>
                                                            }
                                                  >
                                                            <img src={img.largeImageURL} alt="" />
                                                  </GridTile>
                                        ))
                                        }
                              </GridList>
                    )
          } else {
                    imagesList = null;
          }
          const actions = [
                    <FlatButton label="Close" primary={true} onClick={() => handleCloseButton()} />
          ]
          return (
                    <>
                              <div style={{
                                        marginLeft: 50,
                                        marginRight: 50,
                                        marginTop: 20
                              }}>
                                        {imagesList}
                                        <Dialog
                                                  actions={actions}
                                                  modal={false}
                                                  open={isOpen}
                                                  onRequestClose={() => handleCloseButton()}
                                        >
                                                  <img src={currentImage} alt="" style={{ width: '100%' }} />
                                        </Dialog>
                              </div>
                    </>
          )
}

export default Image;