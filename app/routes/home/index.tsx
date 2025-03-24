import ChatCard     from "../../components/ChatCard";
import Buttons      from "../../components/Buttons";
import Contributors from "../../components/Contributors";
import List         from "../../components/List";

export default function home() {
    return (
      <div>
        <ChatCard />
        <List />
        <Buttons /> 
        <Contributors />
      </div>
    );
  }