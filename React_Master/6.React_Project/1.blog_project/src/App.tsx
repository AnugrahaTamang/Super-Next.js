import Navigation from "./Component/Navigation";
import PeopleToFollow from "./Component/PeopleToFollow";
import TrendList from "./Component/TrendList";
import TopicsList from "./Component/TopicsList";
import { IoMdAddCircle } from "react-icons/io";

const App = () => {
  return (
    <div>
      <Navigation />
      <div className="flex justify-center">
        <section className="mx-auto p-6">
          <div>
            <button className="ml-[7rem] bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4">
              Add New Blog
              <IoMdAddCircle className="ml-[.5rem]" />
            </button>
          </div>
        </section>
        <div className="w-[30%]">
          <PeopleToFollow />
          <TrendList />
          <TopicsList />
        </div>
      </div>
    </div>
  );
};

export default App;
