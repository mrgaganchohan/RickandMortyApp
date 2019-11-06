import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import CharItem from './CharItem';
import {
  setCurrentPage,
  setLastPage,
  setCharacters,
  setDisplaySearchFooter
} from '../actions/GetCharacters';
class Footer extends Component {
  render() {
    if (this.props.DisplaySearchFooter) {
      console.log('This will mean display the thing ');
      return (
        <div>
          <div className='footer'>
            <br />
            <br />
            <a
              style={{ color: 'blue', margin: '15px' }}
              href='#'
              onClick={() => {
                this.props.setCurrentPage(
                  // Setting current page as zero because if while searching currentPage
                  // was already 1, this won't cause the characters to update.
                  // so setting it to zero so that, we can update it to 1 later
                  // in allChars
                  0
                );
                
                this.props.setDisplaySearchFooter(false);
              }}
            >
              Go to HomePage
            </a>

            { this.props.currentPage < this.props.lastPage &&
            <a 
              style={{ color: 'blue', margin: '15px' }}
              href='#'
              onClick={() => {
                this.props.setCurrentPage(this.props.currentPage+1);
              }}
            >
                Next Page
            </a>}


            { this.props.currentPage > 1 &&
            <a 
              style={{ color: 'blue', margin: '15px' }}
              href='#'
              onClick={() => {
                this.props.setCurrentPage(this.props.currentPage-1);
              }}
            >
                Previous Page
            </a>}
          </div>
        </div>
      );
    }

    // Normal Footer without a search term
    if (!this.props.DisplaySearchFooter) {
      return (
        <div>
          <div className='footer'>
            <br />
            <br />

            <a
              style={{ color: 'blue', margin: '15px' }}
              href='#'
              onClick={() => {
                this.props.setCurrentPage(1);
              }}
            >
              Home
            </a>
            {/* Conditional rendering being done here.   */}

            {this.props.currentPage !== 1 && (
              <a
                style={{ color: 'blue', margin: '15px' }}
                href='#'
                onClick={() => {
                  this.props.setCurrentPage(
                    parseInt(this.props.currentPage) - 1
                  );
                }}
              >
                Previous
              </a>
            )}

            <a
              style={{ color: 'blue', margin: '15px' }}
              href='#'
              onClick={() => {
                this.props.setCurrentPage(10);
              }}
            >
              Page 10
            </a>

            <a
              style={{ color: 'blue', margin: '15px' }}
              href='#'
              onClick={() => {
                this.props.setCurrentPage(20);
              }}
            >
              Page 20
            </a>
            {/* Making sure if there is no next page, it doesn't show the next button */}

            {this.props.characters.info.next !== '' && (
              <a
                style={{ color: 'blue', margin: '15px' }}
                href='#top'
                onClick={() => {
                  this.props.setCurrentPage(
                    parseInt(this.props.currentPage) + 1
                  );
                }}
              >
                Next
              </a>
            )}

            <a
              style={{ color: 'blue', margin: '15px' }}
              href='#top'
              onClick={() => {
                this.props.setCurrentPage(this.props.lastPage);
              }}
            >
              Last Page
            </a>
            <br />
            <br />
            <hr />
          </div>
        </div>
      );
    }
  }
}

{
  /* getCharacter is given name in Reducer/index.js */
}

const mapStateToProps = state => ({
  currentPage: state.getCharacter.currentPage,
  lastPage: state.getCharacter.lastPage,
  characters: state.getCharacter.characters,
  DisplaySearchFooter: state.getCharacter.DisplaySearchFooter
});

export default connect(
  mapStateToProps,
  { setCurrentPage, setLastPage, setCharacters, setDisplaySearchFooter }
)(Footer);
