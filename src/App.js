import { useState, useEffect } from "react"

import Tab from "./components/Tab"




function App() {
    const Button = (props) => {
        return <button>{props.text}</button>;
    }

    const buttonOnClick = () => {
        alert('ben bay kemal')
    }

    const [activeTab, setActiveTab] = useState()

    useEffect(() => {
        setActiveTab(activeTab)
    }, [activeTab])

    return (
        <>
            <button onClick={() => setActiveTab(1)}>Aktif Tabı Değiştir</button>
            <Tab activeTab={activeTab}>
                <Tab.Panel title='profil'>Some Content</Tab.Panel>
                <Tab.Panel title='hakkinda'>Some Content2</Tab.Panel>
                <Tab.Panel title='ayarlar'>Some Content3</Tab.Panel>
            </Tab>

            <h1>
                sezaiemrekonuk.com
            </h1>


            <Button text='bay kemal' onClick={buttonOnClick}/>
        </>
    );
}

export default App;
