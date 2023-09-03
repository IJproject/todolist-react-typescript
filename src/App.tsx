import { useState } from 'react'
import './App.css'

import Search from './compenents/Search'
import Create from './compenents/Create'

type Memo = {
    id: number,
    date: string,
    content: string,
    isChecked: boolean
}

function App() {
    const sample = [
        {
            id: 1,
            date: '2023-09-28',
            content: 'やらなきゃ１',
            isChecked: false,
        },
        {
            id: 2,
            date: '2023-09-28',
            content: 'やらなきゃ２',
            isChecked: true,
        }

    ]
    const [memos, setMemos] = useState<Memo[]>(sample)

    const completeTask = (): void => {
        setMemos(memos.filter(memo => memo.isChecked === false))
    }

    return (
        <>
            <h1>Todoリスト</h1>
            <Search />
            <div>
                <div>
                    {memos.map((memo) => {
                        return (
                            <div key={memo.id}>
                                <input type="checkbox" defaultChecked={memo.isChecked}></input>
                                <div>{memo.content}</div>
                            </div>
                        )
                    })}
                </div>
                <div onClick={completeTask}>完了</div>
            </div>
            <Create />
        </>
    )
}

export default App
