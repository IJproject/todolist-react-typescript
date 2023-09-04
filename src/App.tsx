import { useState } from 'react'
import './App.css'

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

    const checkMemo = (event: React.ChangeEvent<HTMLInputElement>) => {
        const selectedId: number = +event.target.value
        // const copyMemos: Memo[] = memos
        const selectedMemo = memos.find(memo => memo.id === selectedId)
        if(selectedMemo){
            selectedMemo.isChecked = !selectedMemo.isChecked
        }
    }

    const completeTask = (): void => {
        setMemos(memos.filter(memo => memo.isChecked === false))
    }

    return (
        <div id='container'>
            <h1>Todoリスト</h1>
            <div id='memos'>
                <div id="memo-part">
                    <h2 id="memo-title">〜月〜日のやることリスト</h2>
                    {memos.map((memo) => {
                        return (
                            <div key={memo.id} className='memo'>
                                <input type="checkbox" defaultChecked={memo.isChecked} onChange={checkMemo} value={memo.id} id={'content' + memo.id} className='checkbox' />
                                <label className='content' htmlFor={'content' + memo.id}>{memo.content}</label>
                            </div>
                        )
                    })}
                </div>
                <div onClick={completeTask} id="complete-button">完了</div>
            </div>
            <Create />
        </div>
    )
}

export default App
