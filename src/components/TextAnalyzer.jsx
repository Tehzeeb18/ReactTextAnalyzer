import { useState } from "react";
import ReactDOM from "react-dom/client";

function TextAnalyzer() {
    const [name, setName] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
    };
    const toUppercase = () => {
        setName(name.toLocaleUpperCase());
    };

    const toLowercase = () => {
        setName(name.toLocaleLowerCase());
    };

    const HandleExtraSpace = () => {
        let newName = name.split(/[ ]+/);
        setName(newName.join(" "));
    };
    return (
        <>
            <div className=" bg-blue-100 w-[100vw] h-[100vh]">
                <div className="flex flex-col justify-baseline items-center">
                    <h1 className="text-5xl mb-4">Text Ananlyzer App</h1>
                    <form onSubmit={handleSubmit}>
                        <label className="text-xl font-semibold">
                            Enter your Text Below <br></br>
                            <textarea
                                cols={120}
                                rows={11}
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="border-black font-normal w-[70vw] h-[45vh]"
                            >
                            </textarea>
                        </label>
                    </form>
                </div>
                <div className="flex justify-center items-center">
                <button
                    className="bg-blue-700 w-[10vw] h-[10vh] text-white rounded-2xl "
                    onClick={toUppercase}
                >
                    TO UPPERCASE
                </button>
                <button
                    className="bg-blue-700 w-[10vw] h-[10vh] text-white rounded-2xl ml-4"
                    onClick={toLowercase}
                >
                    to lowercase
                </button>
                <button
                    className="bg-blue-700 w-[10vw] h-[10vh] text-white rounded-2xl ml-4"
                    onClick={() => {
                        setName("");
                    }}
                >
                    Clear Text
                </button>
                <button
                    className="bg-blue-700 w-[15vw] h-[10vh] text-white rounded-2xl ml-4"
                    onClick={HandleExtraSpace}
                >
                    Remove Extra Spaces
                </button>
                </div>


                <div>
                    <div className="flex flex-col items-center mt-8">
                    <h1 className="font-semibold text-2xl">Your Text Summary </h1>
                    <p className="font-medium text-blue-800">
                        {name.split(" ").filter((element)=>{return element.length!==0}).length} words and {name.length} characters
                    </p>
                    <p className="font-medium text-blue-800">{0.008 * name.split(" ").filter((element)=>{return element.length!==0}).length} minute read</p>
                    <p className="font-semibold text-2xl">Preview</p>
                    <p className="text-blue-800">{name.length>0 ? name:"" }</p>
                    </div>

                </div>
            </div>
        </>
    );
}

export default TextAnalyzer;
