import React, { useEffect, useState } from "react";
import Daily from "../../components/Daily/Daily";
import List from "../../components/List/List";
import Profile from "../../components/Profile/Profile";
import ProfileExpand from "../../components/ProfileExpand/ProfileExpand";
import { Scrollbars } from "react-custom-scrollbars";
import { useNavigate } from "react-router-dom";

export default function MainDaily(props) {
  const navigate = useNavigate();
  const [viewProfile, setViewProfile] = useState("hidden");
  let [expense, setExpense] = useState([]);
  useEffect(() => {
    async function HandleDailyExpense() {
      const res = await fetch("/api/expense/getdailyexpense");
      const data = await res.json();

      if (data.errors) {
        navigate("/");
      } else {
        setExpense(data.filterData);
      }
    }
    HandleDailyExpense();
  }, []);
  return (
    <>
      <div className="col-span-2 bg-black">
        <Daily />
      </div>
      <div className="col-span-2 bg-black">
        <Profile setViewProfile={setViewProfile} />
        <Scrollbars
          style={{ width: 540, height: 640 }}
          className="lg:mt-8 -mt-1"
        >
          {expense.map((item) => {
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
      <div className={`absolute top-20 right-6 w-fit h-fit ${viewProfile}`}>
        <ProfileExpand />
      </div>
    </>
  );
}
