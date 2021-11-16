import FlashCard from "../components/FlashCard";
import Header from "../components/Header";
import Main from "../components/Main";
import GetPokes from "../data/Pokes";

export default function FlashCardsPage(){
return(
    <div>
        <>
        <Header> myPokedex</Header>

        <Main>
            <GetPokes />
        </Main>
        </>
    </div>)
}