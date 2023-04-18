import { observer } from 'mobx-react'
import { useEffect, useMemo, useState } from 'react'
import { container } from './di'
import { IAppViewModel } from './viewmodels/AppViewModel'

function App() {
  const appView = useMemo( () => container.get('appview') as IAppViewModel, [])
  useEffect( () => { appView.todoList.load()}, [appView])
  return (
    <div>
      { appView.todoList.isLoading ? <h3>Loading</h3> : appView.todoList.todos.map( td => <div>{td.label}</div>)}
    </div>
  )
}

export default observer(App)
