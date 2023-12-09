import React, {Suspense} from 'react'
import { Routes, Route } from 'react-router-dom';
import { About, Skills, Projects, Contact, PageNotFound, Home } from './components';
const App = () => {
  return (
    <Suspense fallback={<p>Loading ...</p>}>
      <Routes>
        <Route  path='/' element={<Home />}>
          <Route path='' element={<About/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/contact' element={<Contact/>} />
          <Route path='*' element={<PageNotFound/>} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default App