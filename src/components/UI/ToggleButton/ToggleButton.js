import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';

class ToggleButton extends Component {
  constructor (props) {
    super(props);

    this.state = {
      isToggleOn: props.isToggleOn === true
    };

    this.handlerFromProps = props.handler;
    this.captionOn = props.captionOn;
    this.captionOff = props.captionOff;
  }

  clickHandler = () => {
    this.setState((prevState) => {
      const updatedIsToggleOn = !prevState.isToggleOn;
      return {
        isToggleOn: updatedIsToggleOn
      }
    });
  }
  
  render () {
    const caption = this.state.isToggleOn === true ? this.captionOn : this.captionOff;
    const handler = () => {
      this.handlerFromProps();
      this.clickHandler();
    }
    return (
      <Button 
        clickHandler={handler}
        caption={caption}
      />
    );
  }
}

ToggleButton.propTypes = {
  isToggleOn: PropTypes.bool,
  handler: PropTypes.func.isRequired,
  captionOn: PropTypes.string.isRequired,
  captionOff: PropTypes.string.isRequired
};

export default ToggleButton;