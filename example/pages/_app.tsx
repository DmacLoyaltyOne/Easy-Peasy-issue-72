import React from 'react'
import App, { Container } from 'next/app'
import {
  StoreProvider,
  createStore,
  useStore,
  useAction,
  select
} from 'easy-peasy'

import store from '../models/createStore'
// @ts-ignore
import { appWithTranslation } from '../i18n'

class MyApp extends App {
  public render() {
    const { Component, pageProps } = this.props

    return (
      <Container>
        <StoreProvider store={store}>
          <Component {...pageProps} />
        </StoreProvider>
      </Container>
    )
  }
}

export default appWithTranslation(MyApp)
