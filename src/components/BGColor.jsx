import React from "react"
const BGColor = () => {
    const [bgColor, setBgColor] = React.useState("red")
    function clickHandle(e) {
        let targetText = e.target.innerText
        targetText = targetText.toLowerCase()
        setBgColor(() => (targetText))
    }
    return (
        <>
            <div style={{ backgroundColor: bgColor }} className="w-full h-screen p-5">
                <div className="bg-white rounded  border-2 border-black flex justify-center align-bottom">
                    <button className="bg-red-800 text-white m-4 px-4 py-2 rounded border-2 border-black" onClick={clickHandle}> Red</button>
                    <button className="bg-green-800 text-white m-4 px-4 py-2 rounded border-2 border-black" onClick={clickHandle}> Green</button>
                    <button className="bg-white text-black m-4 px-4 py-2 rounded border-2 border-black" onClick={clickHandle}> white</button>
                    <button className="bg-blue-800 text-white m-4 px-4 py-2 rounded border-2 border-black" onClick={clickHandle}> blue</button>
                    <button className="bg-yellow-400 text-white m-4 px-4 py-2 rounded border-2 border-black" onClick={clickHandle}> yellow</button>
                </div>
            </div>
        </>
    )
}

export default BGColor