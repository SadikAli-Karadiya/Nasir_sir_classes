import React, { useState, useEffect } from "react";
import { RiLogoutCircleRLine } from "react-icons/ri";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaRegUserCircle } from "react-icons/fa";
import { MdOutlinePersonAddAlt } from "react-icons/md";
import { MdPeopleOutline } from "react-icons/md";
import { MdPublishedWithChanges } from "react-icons/md";
import { VscKey } from "react-icons/vsc";
import { NavLink } from "react-router-dom";
import { NasirContext } from "../NasirContext";
import { handleLogout } from "../AuthProvider";

export default function Searchbar({toggle, SetToggle}) {
  const { admin, section, branch } = React.useContext(NasirContext);
  const { logout, changeSection, changeBranch } = React.useContext(NasirContext);
  const myData = admin;

  function handleLogoutButton() {
    handleLogout();
    logout();
    changeBranch();
    changeSection();
  }
  function handleToggle() {
    SetToggle(!toggle);
  }

  function handleSection() {
    localStorage.removeItem("section");
    changeSection();
  }

  return (
    <div className="w-full z-[101] sticky top-0 bg-white h-[70px] flex flex-row items-center justify-between shadow-[0_10px_10px_-15px_rgba(0,0,0,0.3)]">
       <div className="flex flex-1 justify-end items-center pr-4 mr-4 border-r-2 h-10">
          <span className="text-base text-gray-400 font-semibold capitalize">
            {branch == 'ajitmill' ? 'NSC 1': 'NSC 2'}
          </span>
      </div>
       <div className="flex justify-end items-center pr-4 mr-4 border-r-2 h-10">
        <span className="text-base text-gray-400 font-semibold capitalize">
          {section == 'primary' ? 'Primary' : 'Secondary'}
        </span>
      </div>
      <div className="right" onClick={handleToggle}>
        <div className="top grid grid-col-2 items-center cursor-pointer justify-right space-x-5 pr-5 static">
          <form
            action=""
            className="flex items-center space-x-2 cursor-pointer"
            id="profile"
          >
            <div className="profile h-12 w-12 border-2 rounded-full flex justify-center items-center">
              <img
                className="rounded-full  w-full mx-auto"
                src={myData?.staff_id?.basic_info_id?.photo != '' ? myData?.staff_id?.basic_info_id?.photo : "images/user_default@123.png"}
                width="7%"
                height="7%"
                alt="profile"
              />
            </div>
            <div className="text-left items-center">
              <p className="text-base capitalize">
                {admin?.username
                  ? admin?.username
                  : "...."}
              </p>
              <p className="text-xs text-gray-500">
                {" "}
                {myData?.staff_id?.contact_info_id?.email
                  ? myData?.staff_id?.contact_info_id?.email
                  : "...."}
              </p>
            </div>
            <BsThreeDotsVertical className="cursor-pointer text-gray-500" />
          </form>
        </div>
        {toggle && (
          <div
            className={`bottom absolute top-20 right-3 bg-white drop-shadow-xl rounded-xl xl:w-1/4 2xl:w-1/5`} style={{zIndex: '999'}}
            id="profileTable"
          >
            <div className="">
              <div className="mt-3 mb-3 ">
                <NavLink to="/Componant/Updateprofile">
                  <div className="bg-white hover:bg-slate-200 text-gray-800  h-11 my-2 cursor-pointer hover:text-blue-500  flex justify-start px-2 hover:rounded-lg ml-4 mr-4 space-x-6 items-center">
                    <div className="bg-blue-200 p-2.5 flex justify-center items-center rounded-full">
                      <FaRegUserCircle className="text-blue-500 text-xl " />
                    </div>
                    <span className="md:text-sm xl:text-base">
                      Admin Profile
                    </span>
                  </div>
                </NavLink>
                <NavLink className="nav-link" to="/Componant/Changepassword">
                  <div className="bg-white hover:bg-slate-200 text-gray-800  h-11 my-2 cursor-pointer hover:text-blue-500  flex justify-start px-2 hover:rounded-lg ml-4 mr-4 space-x-6  items-center">
                    <div className="bg-blue-200  p-2.5 flex justify-center items-center rounded-full">
                      <VscKey className="text-blue-500 text-xl" />
                    </div>
                    <span className="md:text-sm xl:text-base">
                      Change Passoword
                    </span>
                  </div>
                </NavLink>

                {myData?.is_super_admin ? (
                  <NavLink to="/Componant/Addadmin">
                    <div className="bg-white hover:bg-slate-200 text-gray-800  h-11 my-2 cursor-pointer hover:text-blue-500  flex justify-start px-2 hover:rounded-xl ml-4 mr-4 space-x-6  items-center">
                      <div className="bg-blue-200  p-2.5 flex justify-center items-center rounded-full">
                        <MdOutlinePersonAddAlt className="text-blue-500 text-xl" />
                      </div>
                      <span className="md:text-sm xl:text-base">Add Admin</span>
                    </div>
                  </NavLink>
                ) : null}

                {myData?.is_super_admin ? (
                  <NavLink to="/Componant/AdminList">
                    <div className="bg-white hover:bg-slate-200 text-gray-800  h-11 my-2 cursor-pointer hover:text-blue-500  flex justify-start px-2 hover:rounded-xl ml-4 mr-4 space-x-6  items-center">
                      <div className="bg-blue-200  p-2.5 flex justify-center items-center rounded-full">
                        <MdOutlinePersonAddAlt className="text-blue-500 text-xl" />
                      </div>
                      <span className="md:text-sm xl:text-base">
                        Admin List
                      </span>
                    </div>
                  </NavLink>
                ) : null}
                <div className="nav-link" onClick={(e) => handleSection()}>
                  <div className="bg-white hover:bg-slate-200 text-gray-800  h-11 my-2 cursor-pointer hover:text-blue-500  flex justify-start px-2 hover:rounded-lg ml-4 mr-4 space-x-6  items-center">
                    <div className="bg-blue-200 p-2.5  flex justify-center items-center rounded-full">
                      <MdPublishedWithChanges className="text-blue-500 text-xl" />
                    </div>
                    <div className="flex flex-col">
                      <span className="md:text-sm xl:text-base">
                        Change Section
                      </span>
                    </div>
                  </div>
                </div>

                <hr></hr>
                <div
                  onClick={handleLogoutButton}
                  className="bg-white hover:bg-slate-200 text-gray-800  h-11 my-2 cursor-pointer hover:text-blue-500  flex justify-start px-2 hover:rounded-lg ml-4 mr-4 space-x-6  items-center"
                >
                  <div className="bg-blue-200  p-2.5 flex justify-center items-center rounded-full">
                    <RiLogoutCircleRLine className="text-blue-500 text-xl" />
                  </div>
                  <span className="md:text-sm xl:text-base">Logout</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
