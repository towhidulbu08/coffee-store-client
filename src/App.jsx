import { useLoaderData } from "react-router-dom";
import "./App.css";
import Coffee from "./Components/Coffee";

function App() {
  const coffess = useLoaderData();

  return (
    <div >
      <h1 className="text-6xl text-violet-600 text-center">
        Hot Coffee:{coffess.length}
      </h1>
      <div className="max-w-[1040px] mx-auto grid md:grid-cols-2 gap-8">
            {
              coffess.map(coffee=><Coffee key={coffee._id} coffee={coffee}>  </Coffee>)
            }
      </div>
    </div>
  );
}

export default App;
