import React from "react";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";

import Single from "./pages/single/Single";
import NewMovie from "./pages/new/newMovie/newMovie";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { productInputs, userInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import List_user from "./pages/list/list_users/List_user";
import List_movie from "./pages/list/list_movies/List_movie";

import List_cinemas from "./pages/list/list_cinemas/List_cinemas";

import EditCinemas from "./pages/cinema/EditCinemas";
import NewCinemas from "./pages/cinema/NewCinemas";

import List_order from "./pages/order/List_order";
import Calendar from "./components/calendar/Calendar";
import MakeCalendar from "./pages/calendars/makeCalendar";
import Feedback from "./pages/feedback/feedback";
import NewFeedBack from "./pages/feedback/NewFeedbacks";
import Profile from "./pages/profile/profile";

export const userRows = [];
export const cinemaRows = [];

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />

            <Route path="users">
              <Route index element={<List_user />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<NewMovie inputs={userInputs} title="Add New User" />}
              />
            </Route>

            <Route path="products">
              <Route index element={<List_movie />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="newMovie"
                element={<NewMovie title="Thêm Phim Mới" />}
              />
            </Route>

            <Route path="cinemas">
              <Route index element={<List_cinemas />} />
              {/* <Route path="new" element={<NewCinemas />} /> */}
              <Route path=":id/edit" element={<EditCinemas />} />
            </Route>

            <Route path="calendar">
              <Route index element={<MakeCalendar />} />
            </Route>

            <Route path="feedbacks">
              <Route index element={<Feedback />} />
              <Route path="new" element={<NewFeedBack />} />
            </Route>

            <Route path="profile">
              <Route index element={<Profile />} />
            </Route>
            <Route path="orders">
              <Route index element={<List_order />} />
              <Route path=":userId" element={<Single />} />
              {/* <Route
                path="new"
                element={<New inputs={userInputs} title="Order's Details" />}
              /> */}
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
