import React from 'react'
import PropTypes from 'prop-types';
import Radium from 'radium'

import FlatButton from 'material-ui/FlatButton'
import {ListItem} from 'material-ui/List'

import { VerificationButtonMsg } from './'

const STYLES = {
  dialog: {
  },
  requestBtn: {
    marginLeft: '-30px'
  },
  simpleDialog: {
    contentStyle: {
    },
    actionsContainerStyle: {
      textAlign: 'center'
    }
  }
}

const VerificationButtons = ({
    value,
    codeIsSent = false,
    verified,
    requestVerificationCode,
    resendVerificationCode,
    enterVerificationCode,
    setFocusedPin,
    pinFocused,
    changePinValue,
    attrType,
    smsCode,
    index,
    enterField,
    identity
  }) => {

  if (verified) return null
  if (codeIsSent) {
    return (<div>
      <ListItem disabled leftIcon={<div />} >
        <FlatButton
          label="FILL IN THE CODE"
          secondary
          style={STYLES.requestBtn}
          onClick={() => enterVerificationCode({
            title: 'Phone Verification',
            message: (<VerificationButtonMsg
              msgType={"codeInput"}
              attrType={'smsCode'}
              value={smsCode}
              setFocusedPin={(value, index) => { setFocusedPin(value, index) }}
              changePinValue={(value, index) => { changePinValue(value, index) }}
              enterField={enterField}
              phoneNumber={value}
              identityNew={identity}
              pinFocused={pinFocused} />),
            rightButtonLabel: 'OK',
            leftButtonLabel: 'CANCEL',
            style: STYLES.simpleDialog,
            attrType,
            index,
            attrValue: value
          })} />
      </ListItem>
      <ListItem disabled leftIcon={<div />} >
        <FlatButton
          label="CAN'T FIND THE CODE"
          secondary
          style={STYLES.requestBtn}
          onClick={() => resendVerificationCode({
            title: 'Verification Request Phone',
            message: (<VerificationButtonMsg
              attrType={attrType}
              msgType="codeRequest"
              phoneNumber={value}
              value={smsCode}
              setFocusedPin={(value) => { setFocusedPin(value, index) }}
              changePinValue={(value) => { changePinValue(value, index) }}
              focused={pinFocused} />),
            rightButtonLabel: 'RESEND CODE',
            leftButtonLabel: 'CANCEL',
            style: STYLES.simpleDialog,
            index,
            attrType,
            attrValue: value
          })} />
      </ListItem>
    </div>)
  }
  if (attrType === 'phone') {
    return (<ListItem disabled leftIcon={<div />} >
      <FlatButton
        label="Request Verification"
        secondary
        style={STYLES.requestBtn}
        onClick={() => requestVerificationCode({
          title: 'Verification Request',
          message: (<VerificationButtonMsg
            attrType={attrType}
            msgType="codeRequest"
            value={smsCode}
            phoneNumber={value}
            />),
          rightButtonLabel: 'Send verification code',
          leftButtonLabel: 'CANCEL',
          style: STYLES.simpleDialog,
          attrType,
          index,
          attrValue: value
        })} />
    </ListItem>)
  } else {
    return (<ListItem disabled leftIcon={<div />} >
      <FlatButton
        label="Request Verification"
        secondary
        style={STYLES.requestBtn}
        onClick={() => requestVerificationCode({
          title: 'Verification Request',
          message: (<VerificationButtonMsg
            msgType="codeRequest"
            attrType={attrType}
            value={smsCode}
            phoneNumber={value}
          />),
          rightButtonLabel: 'Send verification Link',
          leftButtonLabel: 'CANCEL',
          style: STYLES.simpleDialog,
          attrType,
          index,
          attrValue: value
        })} />
    </ListItem>)
  }
}

VerificationButtons.propTypes = {
  value: PropTypes.string,
  codeIsSent: PropTypes.bool,
  verified: PropTypes.bool,
  index: PropTypes.any,
  smsCode: PropTypes.string,
  attrType: PropTypes.string,
  pinFocused: PropTypes.bool,
  setFocusedPin: PropTypes.func,
  enterField: PropTypes.func,
  changePinValue: PropTypes.func,
  requestVerificationCode: PropTypes.func,
  resendVerificationCode: PropTypes.func,
  enterVerificationCode: PropTypes.func
}

export default Radium(VerificationButtons)
