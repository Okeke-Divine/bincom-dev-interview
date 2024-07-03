import { APIProvider } from "./components/APIContext";
import Navbar from "./components/NavBar"
import Table from "./components/Table"

export default function App() {
  // ... rest of your code

  return (
    <APIProvider>
      <>
        {/* application navbar */}
        <Navbar />
        <div className="app-padding mt-5">
          {/* list */}
          <div className="text-xl font-bold p-3">Department List</div>
          <div className="mt-3">
            <Table />
          </div>
        </div>
      </>
    </APIProvider>
  );
}
