// import Home from "./components/Home";
// import Blog from "./components/Blog";
import Navbar from "./components/Navbar";
// import PostDetails from "./components/PostDetails";
import { AllRoutes } from "./AllRoutes";

import { BrowserRouter as Router } from "react-router-dom";
// import blogService from "./services/blog";

function App() {
  // const [blogs, setBlogs] = useState([]);
  // const [recentBlogs, setRecentBlogs] = useState([]);
  // const [categories, setCategories] = useState([]);

  // useEffect(() => {
  //   blogService.getAll().then((blogs) => {
  //     setBlogs(blogs.allPosts);
  //     setRecentBlogs(blogs.recentPosts);
  //     setCategories(blogs.categories);
  //   });
  // }, []);

  return (
    <Router>
      <main className="text-gray-300 bg-gray-900 body-font">
        <Navbar />
        <AllRoutes />
        {/* <Routes>
          <Route
            exact
            path="/blog"
            element={
              <Blog
                blogs={blogs}
                recentBlogs={recentBlogs}
                categories={categories}
              />
            }
          />
          <Route
            exact
            path="/blog/:slug"
            element={<PostDetails blogs={blogs} />}
          />
        </Routes> */}
      </main>
    </Router>
  );
}

export default App;
