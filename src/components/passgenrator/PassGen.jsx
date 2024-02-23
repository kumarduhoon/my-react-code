import { useCallback, useState, useEffect, useRef } from "react"
import "./PassGen.css"
const PassGen = () => {
    const [length, setLength] = useState("8");
    const [numAllowed, setNumAllowed] = useState(false);
    const [charAllowed, setCharAllowed] = useState(false);
    const [password, setPassword] = useState()
    const passwordrefHook = useRef()
    const copyClip = () => {
        passwordrefHook.current?.select();
        window.navigator.clipboard.writeText(password);
    }

    const passgenroatorFun = useCallback(function () {
        let pass = '';
        let str = 'ABCDEFGIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
        if (numAllowed) str += '0123456789'
        if (charAllowed) str += '!@#$%^&*(){}|?><[]'

        for (let i = 1; i <= length; i++) {
            let char = Math.floor((Math.random() * str.length) + 1)
            pass = pass + str.charAt(char)
        }
        setPassword(() => (pass))
    }, [length, numAllowed, charAllowed, setPassword])

    useEffect(() => {
        passgenroatorFun()
    }, [length, numAllowed, charAllowed, passgenroatorFun])
    return (<>
        <div className="w-full h-screen bg-black text-white pt-8" >
            <div className="w-full max-w-md mx-auto rounded-lg px-4 text-orange-500 bg-gray-600 p-5">
                <div className=" flex rounded-lg overflow-hidden mb-4">
                    <input
                        type="text"
                        value={password}
                        className=" outline-none w-full py-1 px-3"
                        placeholder="password"
                        readOnly
                        ref={passwordrefHook}
                    />
                    <button className=" outline-none bg-blue-500 shrink-0 py-0.5 px-3 text-white"
                        onClick={copyClip}
                    >Copy</button>
                </div>
                <div className="flex text-sm gap-x-2">
                    <input
                        type="range"
                        max={50}
                        defaultValue={length}
                        value={length}
                        className=" cursor-pointer"
                        onChange={(e) => (setLength(e.target.value))}
                    />
                    <label>Length :- {length}</label>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultValue={numAllowed}
                            onChange={() => (setNumAllowed((prev) => (!prev)))}
                        />
                        <label>Number</label>
                    </div>
                    <div className="flex items-center gap-x-1">
                        <input
                            type="checkbox"
                            defaultValue={charAllowed}
                            onChange={() => (setCharAllowed((prev) => (!prev)))}
                        />
                        <label>String</label>
                    </div>
                </div>
            </div>
        </div>
    </>)
}
export default PassGen