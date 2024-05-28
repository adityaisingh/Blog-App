import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import DashProfile from "../Compontents/DashProfie";
import DashSidebar from "../Compontents/DashSidebar";
import DashPosts from "../Compontents/Dashposts";
import DashUsers from "../Compontents/DashUsers";
import DashboardComp from "../Compontents/DashboardComp";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabfromURL = urlParams.get("tab");
    if (tabfromURL) {
      setTab(tabfromURL);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-56">
        {/* Sidebar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === "profile" && <DashProfile />}
      {/* posts... */}
      {tab === "posts" && <DashPosts />}
      {/* users */}
      {tab == "users" && <DashUsers />}
      {/* Dashboard */}
      {tab === "dash" && <DashboardComp />}
    </div>
  );
};

export default Dashboard;
