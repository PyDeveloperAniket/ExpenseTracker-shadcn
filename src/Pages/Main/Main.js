import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Home from "../../components/Home/Home";
import Profile from "../../components/Profile/Profile";
import List from "../../components/List/List";
import ProfileExpand from "../../components/ProfileExpand/ProfileExpand";
import { Scrollbars } from "react-custom-scrollbars";

export default function Main(props) {
  const navigate = useNavigate();
  const [viewProfile, setViewProfile] = useState("hidden");
  const [expense, setExpense] = useState([]);
  useEffect(() => {
    async function HandleAllExpense() {
      const res = await fetch("/api/expense/viewexpense");
      const data = await res.json();
      if (data.errors) {
        navigate("/");
      } else {
        setExpense(data.expenses);
      }
    }
    HandleAllExpense();
  }, []);

  return (
    <>
      <div className="lg:col-span-2 bg-black -mt-1 lg:mt-0 ">
        <Home openModalBudget={props.openModalBudget} />
      </div>
      <div className="col-span-2 bg-black ">
        <Profile setViewProfile={setViewProfile} />
        <Scrollbars
          style={{ width: 540, height: 640 }}
          className="lg:mt-8 -mt-1"
        >
          {expense.reverse().map((item) => {
            return (
              <List
                setDeleteId={props.setDeleteId}
                openModalConfirm={props.openModalConfirm}
                expense={item}
              />
            );
          })}
        </Scrollbars>
      </div>
      <div
        className={`hidden lg:absolute top-20 right-6 w-fit h-fit ${viewProfile}`}
      >
        <ProfileExpand />
      </div>
    </>
  );
}
