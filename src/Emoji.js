import { useEffect, useState } from "react";
import Icon from "./Icon";

export default function Emoji() {
    const [search, setSearch] = useState("");
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch("https://emoji-api-app.herokuapp.com/")
            .then((res) => res.json())
            .then((res) => {
                console.log(res);
                setData(res);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const changeSearch = (event) => setSearch(event.target.value);

    const renderSearch = data.filter((item) =>
        search
            .split(" ")
            .every((searchEmoji) =>
                item.keywords.toLowerCase().includes(searchEmoji.toLowerCase())
            )
    );

    return (
        <>
            <div className="container">
                <div className="header-emoji">
                    <h1 className="title">Emoji Finder</h1>
                    <p className="text">Find emoji by keywords</p>
                </div>
            </div>
            <div className="header-search">
                <form>
                    <input
                        className="input"
                        type="input"
                        placeholder="Placeholder"
                        value={search}
                        onChange={changeSearch}
                    ></input>
                </form>
                <div className="cardAll">
                    {renderSearch.map((item) => (
                        <Icon
                            key={item.title}
                            symbol={item.symbol}
                            title={item.title}
                            keywords={Array.from(new Set(item.keywords.split(" "))).join(" ")}
                        />
                    ))}
                </div>
            </div>
        </>
    );
}
