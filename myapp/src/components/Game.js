
import { useState } from "react";
import {animals} from "../components/AnimalDb";
import '../assets/css/game.css'

export default function Game(){
    const [targetAnimal, setTargetAnimal] = useState(getRandomAnimal());
    const [result, setResult] = useState(null);

    function getRandomAnimal(){
        const randomIndex=Math.floor(Math.random()*animals.length);
        return {...animals[randomIndex],id:randomIndex};
    }
    const handleAnimalClick=(index)=>{
        if(index==targetAnimal.id){
            setResult("Win");
        }else{
            setResult("Lose");
        }
    };

    const restartGame=()=>{
        setTargetAnimal(getRandomAnimal());
        setResult(null);
    };

    return(
        <>
        <div className="game-page">
                <h1>Animal Matching Game</h1>
                        {result && (
                        <div className="result">
                            <h2>Result:{result}</h2>
                            <button onClick={restartGame}>Play Again</button>
                        </div>
                    )}
                    <div className="game-header">
                    <h2>Animal Name: {targetAnimal.name}</h2>
                    </div>
                <div className="animal-grid">
                    {animals.map((animal,index)=>(
                        <div
                            key={index}
                            className="animal-card"
                            onClick={()=>handleAnimalClick(index)}>
                                <img
                                src={require(`../assets/img/${animal.img}`)}
                                alt={animal.name}
                                onError={(e) => (e.target.style.display = "none")}
                                />
                        </div>
                    ))}
                </div>
            </div>
    
        </>
    );
}
