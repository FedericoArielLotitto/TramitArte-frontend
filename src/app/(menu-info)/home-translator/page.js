"use client";

import MenuComponent from "@/components/moleculas/menu/menu";
import TranslatorComponent from "../../../components/translator/translator";
import "../../../components/home/home.css"
import { useState } from "react";

class User {
    constructor(name, id, image, document) {
      this.name = name;
      this.id = id;
      this.image = image;
      this.document = document;
    }
  }
  
  const HomeTranslatorComponent = () => {
    const user1 = new User(
      "Mateo Pastorini",
      "ASDFDF8787",
      "https://i.pinimg.com/564x/e8/ac/0c/e8ac0c49baf56bc75d422e4d4d863f43.jpg",
      "Certificado.pdf"
    );
    const userArray = [user1, user1, user1, user1];
    const [users, setUsers] = useState(userArray);
  
    const handleDeleteUser = (updatedUsers) => {
      setUsers(updatedUsers);
    };
  
    return (
      <div class="container">
        <div className="home-conteiner">
            <div className="columns-container">
              <MenuComponent/>
              <TranslatorComponent users={users} onDelete={handleDeleteUser} />
            </div>
        </div>
      </div>
    );
  };
  
  export default HomeTranslatorComponent;