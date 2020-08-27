import React from 'react';
import Typed from 'react-typed'
import {Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles'
  
const useStyles = makeStyles(theme => ({
    typedContainer: {
      position: 'absolute',
      top: '8%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '100%',
      textAlign: 'center',
      zIndex: 5
    }
  }))

  const Header = () => {

    const styles = useStyles()
  
    return (
      <div className = {styles.typedContainer}>
        <Typography className = {styles.title} variant = 'h4'>
          <Typed strings = {["Secret Family Recipes"]} typeSpeed = {40}/>
        </Typography>
      </div>
    )
  }
  
  export default Header