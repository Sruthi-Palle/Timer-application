import React, { useEffect } from "react";
import { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { AddModal } from "./AddModal";
import { EditModal } from "./EditModal";

export const Timer = () => {
  let now = new Date().toLocaleTimeString();
  let intialForm = { id: "", title: "", description: "" };
  const [form, setForm] = useState(intialForm);
  const [edit, setEdit] = useState(false);
  const [items, setItems] = useState([]);
  const [startTimer, setStartTimer] = useState(false);
  const [ctime, setCtime] = useState(now);
  const [showModal, setShowModal] = useState(false);
  const updateTime = () => {
    let time = new Date().toLocaleTimeString();
    setCtime(time);
  };
  useEffect(() => {
    let interval;
    if (startTimer) {
      interval = setInterval(updateTime, 1000);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [startTimer]);

  return (
    <div>
      <h1>{ctime}</h1>
      <button className="bg-slate-300 m-2" onClick={() => setStartTimer(true)}>
        start
      </button>
      <button className="bg-slate-300 m-2" onClick={() => setStartTimer(false)}>
        stop
      </button>
      <button className="bg-slate-300 m-2" onClick={() => setShowModal(true)}>
        save
      </button>
      {showModal ? (
        <AddModal
          setShowModal={setShowModal}
          setForm={setForm}
          setItems={setItems}
          form={form}
          items={items}
          intialForm={intialForm}
        />
      ) : (
        ""
      )}
      <br />
      {items.map((item, i) => {
        return (
          <div className="flex justify-center items-center gap-5" key={item.id}>
            <div>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
            <div className="">
              <button onClick={() => setEdit(true)}>
                <EditIcon />
              </button>
              <button>
                <DeleteIcon />
              </button>
            </div>
            {edit ? (
              <EditModal
                id={item.id}
                setShowModal={setShowModal}
                setForm={setForm}
                setItems={setItems}
                form={form}
                items={items}
                intialForm={intialForm}
                item={item}
              />
            ) : (
              ""
            )}
          </div>
        );
      })}
    </div>
  );
};
