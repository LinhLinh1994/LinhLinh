import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import Welcome from './components/pages/Welcome'
import Dashboard from './components/pages/Dashboard'
import Users from './components/pages/Users'
import UserCreat from './components/pages/UserCreat'

function App()
{
return (  
    <div>
      <nav class="navbar navbar-expand-lg navbar-togglable navbar-light">
      <div class="container">
        <Link to='/'>
          <span className='fs-4'>Green Acadamy</span>
        <a class="navbar-brand d-lg-none">React JS</a>
        </Link>
      
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to='/users'>
              <a class="nav-link ">Users</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to='/welcome'>
              <a class="nav-link ">Welcome</a>
              </Link>
            </li>
            <li class="nav-item">
              <Link to='/dashboard'>
              <a class="nav-link ">Dashboard</a>
              </Link>
            </li>
          </ul>
        </div>
   
      </div>
    </nav>
    <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/creat" element={<UserCreat />} />

      </Routes>
    <main class='container'>
      {/* <HomeTest04></HomeTest04> */}
     
    </main>
  
    </div>
);
}

export default App;