import React, {useContext} from 'react'
import { AppState } from '../App'

function CompC() {
    const AppData = useContext(AppState);
  return (
    <div>CompC {AppData}</div>
  )
}

export default CompC