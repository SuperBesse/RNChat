export const INIT_APP_START = 'INIT_APP_START'
export const INIT_APP_SUCCESS = 'INIT_APP_SUCCESS'
export const INIT_APP_FAILURE = 'INIT_APP_FAILURE'

export function initApp() {
  return {
    type: INIT_APP_START,
    payload: {},
  }
}
