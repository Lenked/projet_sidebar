import { useState } from "react";
import './App.css';
import { DivLeftCol } from './components/DivLeftCol';
import { TopNav } from './components/TopNav';
import { SimpleSidebar } from './components/SimpleSideBar'; 

function App() {
  const [showAnotherSidebar, setShowAnotherSidebar] = useState(false);

  const toggleAnotherSidebar = () => {
    setShowAnotherSidebar(!showAnotherSidebar);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'left' }}>
      {/* Utilisez showAnotherSidebar pour décider quelle Sidebar afficher */}
      {showAnotherSidebar ? (
        <SimpleSidebar />
      ) : (
        <DivLeftCol toggleAnotherSidebar={toggleAnotherSidebar} />
      )}
      {/* Passez la fonction de bascule à TopNav */}
      <TopNav toggleAnotherSidebar={toggleAnotherSidebar} />
    </div>
  );
}

export default App;
