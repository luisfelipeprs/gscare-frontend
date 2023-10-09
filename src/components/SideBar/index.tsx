import React, { useState } from 'react';

import {
    List,
    House,
    Calendar,
    IdentificationCard,
    UsersThree,
    Chats
  }
  from "phosphor-react";

import { NavLink } from 'react-router-dom';


const Sidebar = () => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);

    return (
        <div className="container">
            
           <div style={{width: isOpen ? "200px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h1 style={{display: isOpen ? "block" : "none"}} className="logo">Saas Care</h1>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <List onClick={toggle}/>
                   </div>
               </div>

                <NavLink to="/admin/" className="link">
                    <div className="icon">
                        <House size={24}/>
                    </div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">House</div>
                </NavLink>

                <NavLink to="/admin/calendar/" className="link">
                    <div className="icon">
                        <Calendar size={24}/>
                    </div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Calendar</div>
                </NavLink>

                <NavLink to="/admin/employee/" className="link">
                    <div className="icon">
                        <IdentificationCard size={24}/>
                    </div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Employee</div>
                </NavLink>

                <NavLink to="/admin/patients/" className="link">
                    <div className="icon">
                        <UsersThree size={24}/>
                    </div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Patients</div>
                </NavLink>

                <NavLink to="/admin/feedback/" className="link">
                    <div className="icon">
                        <Chats size={24}/>
                    </div>
                    <div style={{display: isOpen ? "block" : "none"}} className="link_text">Feedbacks</div>
                </NavLink>
                
           </div>
        </div>
    );
};

export default Sidebar;