import React from 'react'
import { withNamespaces } from '../i18n'
import { useAction, useStore } from 'easy-peasy'

const Footer = (props) => {

  const saveText = useAction(dispatch => dispatch.search.saveText)
  const saveSuccessful: boolean = useStore(state => state.search.saveSuccessful)

  return (
    <div>test</div>
  )
}

export default withNamespaces('footer')(Footer)
