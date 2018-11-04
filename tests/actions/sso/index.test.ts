import { ssoActions, registrationActions } from 'src/actions'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'
import { configure } from 'enzyme'


describe('SSO action creators', () => {

  describe('cancelSSO', () => {
    it('should clear credential request', async () => {
      const mockStore = configureStore([thunk])({})
      const action = ssoActions.cancelSSO()

      action(mockStore.dispatch)
      expect(mockStore.getActions()).toMatchSnapshot()
    })
  })

    describe('cancelReceiving', () => {
      it('should reset the selected claim', async () => {
        const mockStore = configureStore([thunk])({})
        const action = ssoActions.cancelReceiving()

        action(mockStore.dispatch)
        expect(mockStore.getActions()).toMatchSnapshot()
      })
    })
})