import React from "react";
import Dashboardsection from "./Componant/Dashboardsection";
import DashboardMenu from "./Dashboard";
import { Route, Routes } from "react-router-dom";
import { NasirContext } from "./NasirContext";
import AdminLogin from "./screens/AdminLogin";
import ErrorBoundary from "./Componant/ErrorBound";
import NetworkError from "./Componant/NetworkError";
import BranchSelection from "./screens/BranchSelection";

function App() {
  const { token, section, branch } = React.useContext(NasirContext);
  const [call, setCall] = React.useState(false)

  if(process.env.NODE_ENV == 'development'){
    document.getElementById("root").classList.add('debug-screens')
  }
  
  const updateOnlineStatus = () => {
    if(!navigator.onLine)
    {
      return <NetworkError/>
    }
    else{
      return (
        <div className="min-h-screen w-full">
          {
            !branch
            ?
              <BranchSelection />
            :
              !token 
              ? 
                <div>
                  <ErrorBoundary>
                    <Routes>
                      <Route path="/*" element={<AdminLogin />} />
                    </Routes>
                  </ErrorBoundary>
                </div>
              : 
                !section 
                ? 
                  <Dashboardsection />
                : 
                  <DashboardMenu />
          }
        </div>
      );
    }
  }
  
  React.useEffect(()=>{
    updateOnlineStatus()
  }, [call])
  
  const rerender = ()=>{
    setCall(!call)
  }
  
  React.useEffect(() => {
    window.addEventListener('online', rerender)
    window.addEventListener('offline', rerender)
    
    return ()=>{
      window.removeEventListener('online', rerender);
      window.removeEventListener('offline', rerender);
    }
  })
  
  return updateOnlineStatus()
  

  
}

export default App;
