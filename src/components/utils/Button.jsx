import React from 'react';

//material
import Button from '@material-ui/core/Button'

//icon
import icon_ticket from '../../resources/images/icons/ticket.png';

const MyButton = ({bgc, color, text, link}) => {
  return (
    <Button
        href={link}
        contined="contined"
        size="small"
        style={{
            backgroundColor: bgc,
            color: color
        }}
    >
        <img
            className="iconImage"
            src={icon_ticket}
            alt="icon"
        />
        {text}
    </Button>
  )
}

export default MyButton;
