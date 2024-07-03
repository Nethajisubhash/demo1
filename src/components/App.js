import logo from './logo.svg';
import './App.css';
import './css/Custom.css';
import Navbar from './Navbar';
import Content from './components/Content';
import Sidebar from './Sidebar';
function App() {
return (
<div className="App">
<div>
<Navbar />
<Content />
<Sidebar />
</div>
</div>
);
}
export default App;