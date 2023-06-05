import './components/Appbar'
import Appbar from "./components/Appbar";
import Typography from "@mui/material/Typography";
import EmployeeList from "./components/EmployeeList";
import AddEmployeeForm from "./components/AddEmployeeForm";

function App() {
  return (
    <div style={{textAlign:'center'}}>
      <Appbar />
      <Typography variant="h5" component="div" sx={{my:2}}>Add User</Typography>
        <AddEmployeeForm />
        <EmployeeList />
    </div>
  );
}

export default App;
